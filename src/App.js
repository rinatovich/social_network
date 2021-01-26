
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Diologs from './components/Diologs/Diologs.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import './fontawesome-free-5.15.1-web/css/all.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app_body">
          <Navbar />
          <div className="main_content">
            <Route path='/diologs' component={Diologs}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
