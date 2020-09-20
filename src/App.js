import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import { DefaultLayout } from './containers';

function App() {
  return (
    <div>
      <Router>
        <Suspense 
        // fallback={loading()}
        >
          <Switch>
            <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
