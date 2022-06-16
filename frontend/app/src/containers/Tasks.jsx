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

const TasksListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const TasksContentsList = styled.div`
  padding: 20px 15px;
  width: 25%;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`

const CustomSkeleton = styled(Skeleton)`
  width: 90%;
  margin-bottom: 10px;
`

const TasksContentsWrapper = styled.div`
  width: 90%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`

const TaskTitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
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
      <TasksListWrapper>
      <TasksContentsList>
      これからやります
      {
        state.fetchState === REQUEST_STATE.ROADING ?
          <Fragment>
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
          </Fragment>
        :
          state.tasksList.map( task =>
            <TasksContentsWrapper key={task.id}>
              <TaskTitle>{task.name}</TaskTitle>
              作成日：{task.created_at}
            </TasksContentsWrapper>
          )
      }
      </TasksContentsList>
      <TasksContentsList>
      やってます
      {
        state.fetchState === REQUEST_STATE.ROADING ?
          <Fragment>
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
          </Fragment>
        :
          state.tasksList.map( task =>
            <TasksContentsWrapper key={task.id}>
              <TaskTitle>{task.name}</TaskTitle>
              作成日：{task.created_at}
            </TasksContentsWrapper>
          )
      }
      </TasksContentsList>
      <TasksContentsList>
      やりました
      {
        state.fetchState === REQUEST_STATE.ROADING ?
          <Fragment>
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
            <CustomSkeleton variant="rect" height={100} />
          </Fragment>
        :
          state.tasksList.map( task =>
            <TasksContentsWrapper key={task.id}>
              <TaskTitle>{task.name}</TaskTitle>
              作成日：{task.created_at}
            </TasksContentsWrapper>
          )
      }
      </TasksContentsList>
      </TasksListWrapper>
    </Fragment>
  )
}
