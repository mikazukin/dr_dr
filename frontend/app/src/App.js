import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
//components
import { Tasks } from './containers/Tasks.jsx';
import { TaskShow } from './containers/TaskShow.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/tasks">
          <Tasks />
        </Route>
        <Route
          exact
          path="/tasks/:id/show"
          render={({match}) =>
            <TaskShow match={match} />
          }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
