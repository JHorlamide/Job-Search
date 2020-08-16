const ACTION = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  GET_DATA: 'GET_DATA',
  ERROR: 'ERROR',
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return {
        loading: true,
        jobs: [],
      };

    case ACTION.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs,
      };

    case ACTION.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
};
