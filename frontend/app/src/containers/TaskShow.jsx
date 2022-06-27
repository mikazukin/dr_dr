import React, { Fragment, useEffect, useReducer } from 'react';
import styled from 'styled-components';
// api
import { fetchTask } from '../apis/tasks';
// constants
import { REQUEST_STATE } from '../constants';
//reducer
import { initialState,
  showActionTypes,
  showReducer 
} from '../reducers/showTask';

export const TaskShow = ({ match }) => {

  const [state, dispatch] = useReducer(showReducer, initialState);
  useEffect(() => {
    dispatch({type: showActionTypes.FETCHING});
    fetchTask(match.params.id)
    .then((data) =>
      dispatch({type: showActionTypes.FETCH_SUCCESS,
                payload: {
                  task: data.task
                }
      })
    )
  }, []);

  return(
    <Fragment>
      タスク詳細
    {
      state.fetchState === REQUEST_STATE.ROADING ?
        <Fragment>
          ローディング中...
        </Fragment>
      :
        <Fragment>
          {state.task.name}{state.task.description}{state.task.status}
        </Fragment>
    }
    </Fragment>
  )
}
