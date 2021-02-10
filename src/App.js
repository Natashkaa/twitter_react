import React from 'react';
import './App.css';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'


import MainPage from './Containers/mainContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/main' component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
