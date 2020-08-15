const ACTION = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return {
        loading: true,
        job: [],
        error: false,
      };
    
    case ACTION.GET_DATA:
      return {
        ...state,
        loading: false,
        job: [action.payload.job],
      };
    
    case ERROR:
      return {
        ...state,
        loading: false,
        job: [],
        error: action.payload.error,
      };
    
    default:
      return state;
  }
};
