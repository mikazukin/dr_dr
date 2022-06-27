import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  task: []
};

export const showActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

export const showReducer = (state, action) => {
  switch (action.type) {
    case showActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.ROADING
      };
    case showActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        task: action.payload.task
      };
    default:
      throw new Error();
  }
}
