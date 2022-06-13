import React, { Fragment, useEffect } from 'react';
import { fetchTasks } from '../apis/tasks';

export const Tasks = () => {
  useEffect(() => {
    fetchTasks()
    .then((data) =>
      console.log(data)
    )
  }, []);
  return(
    <Fragment>
      タスク一覧
    </Fragment>
  )
}
