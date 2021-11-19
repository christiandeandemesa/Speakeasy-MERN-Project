import './App.css';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import EnglishTutor from './views/EnglishTutor';
import SpanishTutor from './views/SpanishTutor';
import GreekTutor from './views/GreekTutor';
import English from './views/English';
import Spanish from './views/Spanish';
import Greek from './views/Greek';
import Tutor from './views/Tutor';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/tutors/register'>
          <Register />
        </Route>
        <Route path='/tutors/login'>
          <Login />
        </Route>
        <Route path='/tutors/:id'>
          <Tutor />
        </Route>
        <Route path='/english/tutors'>
          <EnglishTutor />
        </Route>
        <Route path='/spanish/tutors'>
          <SpanishTutor />
        </Route>
        <Route path='/greek/tutors'>
          <GreekTutor />
        </Route>
        <Route path='/english'>
          <English />
        </Route>
        <Route path='/spanish'>
          <Spanish />
        </Route>
        <Route path='/greek'>
          <Greek />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;