import React, { Fragment, useEffect, useReducer } from 'react';
import styled from 'styled-components';

// api
import { fetchTasks } from '../apis/tasks';

// constants
import { REQUEST_STATE } from '../constants';

//reducer
import { initialState,
  tasksActionTypes,
  tasksReducer 
} from '../reducers/tasks';

// components
import Skeleton from '@material-ui/lab/Skeleton';

const Title = styled.h1`
  font-size: 20px;
`

export const Tasks = () => {

  const [state, dispatch] = useReducer(tasksReducer, initialState);
  useEffect(() => {
    dispatch({type: tasksActionTypes.FETCHING});
    fetchTasks()
    .then((data) =>
      dispatch({type: tasksActionTypes.FETCH_SUCCESS,
                payload: {
                  tasks: data.tasks
                }
      })
    )
  }, []);

  return(
    <Fragment>
      <Title>タスク一覧</Title>
      {
        state.fetchState === REQUEST_STATE.ROADING ?
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        :
          state.tasksList.map( task =>
            <div key={task.id}>{task.name}</div>
          )
      }
    </Fragment>
  )
}
