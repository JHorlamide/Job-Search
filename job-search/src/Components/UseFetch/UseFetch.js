import { useReducer, useEffect } from "react";
import { rootReducer } from "../Reducer/rootReducer";
import axios from "axios";


const url =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

export const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(rootReducer, {
    loading: true,
    jobs: [],
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: "MAKE_REQUEST" });
    axios
      .get(url, {
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        const results = res.data;
        dispatch({ type: "GET_DATA", payload: { jobs: results } });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        dispatch({ type: "ERROR", payload: { error: err } });
      });
    
    return () => {
      cancelToken.cancel();
    };
    
  }, [params, page]);

  return state;
};
