import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import speakeasy from './images/speakeasy.jpg';
import English from './views/English';
import britishPub from './images/british-pub.jpg';
import EnglishTutor from './views/EnglishTutor';
import Spanish from './views/Spanish';
import spanishCantina from './images/spanish-cantina.jpg';
import Greek from './views/Greek';
import greekTaverna from './images/greek-taverna.jpg'
import Tutor from './views/Tutor';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/tutors/:id'>
          <Tutor />
        </Route>
        <Route path='/english/tutors'>
          <EnglishTutor />
        </Route>
        <Route path='/english'>
          <div styles={{ backgroundImage: `url(${britishPub})` }}> {/*Why doesn't the background image work*/}
            <English />
          </div>
        </Route>
        <Route path='/spanish'>
          <div styles={{ backgroundImage: `url(${spanishCantina})` }}> {/*Why doesn't the background image work*/}
            <Spanish />
          </div>
        </Route>
        <Route path='/greek'>
          <div styles={{ backgroundImage: `url(${greekTaverna})` }}> {/*Why doesn't the background image work*/}
            <Greek />
          </div>
        </Route>
        <Route path='/error'>
          <Error />
        </Route>
        <Route path='/home'>
          <div styles={{ backgroundImage: `url(${speakeasy})` }}> {/*Why doesn't the background image work*/}
            <Home />
          </div>
        </Route>
        <Route path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;