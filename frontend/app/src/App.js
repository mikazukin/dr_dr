import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
//components
import { Tasks } from './containers/Tasks.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
