import { useReducer, useEffect } from 'react';
import rootReducer from '../Reducer/rootReducer';
import axios from 'axios';

const url = 'https://www.github.com/jobs';

export const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(rootReducer, {
    loading: false,
    job: []
  });

  useEffect(() => {
    dispatch({ type: 'MAKE_REQUEST' });
    const cancelToken = axios.source();
    axios.get(url).then((res) => {
      const result = res.data;
      dispatch({type: 'GET_DATA', payload: {job: result}})
    }).catch((err) => {
      dispatch({type: 'ERROR', payload: {error: err}})
    })

    return () => {
      cancelToken.Cancel();
    }
  })
}