import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'


import MainPage from './Containers/mainContainer'
import LogInPage from './Pages/LogIn'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/main' component={MainPage}/>
          <Route path='/logIn' component={LogInPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
