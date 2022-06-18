import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  beginTasksList: [],
  doingTasksList: [],
  endTasksList: []
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
        beginTasksList: action.payload.begin_tasks,
        doingTasksList: action.payload.doing_tasks,
        endTasksList: action.payload.end_tasks
      };
    default:
      throw new Error();
  }
}
