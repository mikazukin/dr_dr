import axios from 'axios';
import { tasksIndex, taskShow } from '../urls/index.js';

export const fetchTasks = () => {
  return axios.get(tasksIndex)
  .then(res => {return res.data})
  .catch(e => console.error(e))
}

export const fetchTask = (id) => {
  return axios.get(taskShow(id))
  .then(res => {return res.data})
  .catch(e => console.error(e))
}
