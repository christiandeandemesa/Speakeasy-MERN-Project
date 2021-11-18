import './App.css';
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './views/Home';
import EnglishTutor from './views/EnglishTutor';
import SpanishTutor from './views/SpanishTutor';
import GreekTutor from './views/GreekTutor';
import English from './views/English';
import Spanish from './views/Spanish';
import Greek from './views/Greek';
import Tutor from './views/Tutor';
import Error from './views/Error';
import Register from './views/Register';
import Login from './views/Login';

function HeaderComponent() {
  const { t, i18n } = useTranslation('common');
  return <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <h2>{t('header.name')}</h2>
        <h2>{t('header.languages')}</h2>
        <h2>{t('header.register')}</h2>
        <h2>{t('header.login')}</h2>
        <p>{t('body.homeText')}</p>
        <p>{t('body.enLearn')}</p>
        <p>{t('body.enLook')}</p>
        <p>{t('body.enTutor')}</p>
        <p>{t('body.grLearn')}</p>
        <p>{t('body.grLook')}</p>
        <p>{t('body.grTutor')}</p>
        <p>{t('body.spLearn')}</p>
        <p>{t('body.spLook')}</p>
        <p>{t('body.spTutor')}</p>
        <p>{t('body.learnBtn')}</p>
        <p>{t('body.lookBtn')}</p>
        <p>{t('body.tutorBtn')}</p>
        <p>{t('body.resume')}</p>
        <p>{t('body.noResume')}</p>
        <p>{t('body.languages')}</p>
        <p>{t('body.en')}</p>
        <p>{t('body.gr')}</p>
        <p>{t('body.sp')}</p>
        <p>{t('body.online')}</p>
        <p>{t('body.yes')}</p>
        <p>{t('body.no')}</p>
        <p>{t('body.hour')}</p>
        <p>{t('body.contact')}</p>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        <button onClick={() => i18n.changeLanguage('gr')}>gr</button>
        <button onClick={() => i18n.changeLanguage('sp')}>sp</button>
    </div>
}

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
        <Route path='/error'>
          <Error />
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