import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  tasksList: []
};

export const tasksActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case tasksActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.ROADING
      };
    case tasksActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        tasksList: action.payload.tasks
      };
    default:
      throw new Error();
  }
}
