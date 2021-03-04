import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'


import MainPage from './Containers/mainContainer'
import LogInPage from './Pages/LogIn'
import Me_Page from './Pages/User_Page'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/main' component={MainPage}/>
          <Route path='/logIn' component={LogInPage}/>
          <Route path='/me' component={Me_Page}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
