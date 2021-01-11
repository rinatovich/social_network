
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './fontawesome-free-5.15.1-web/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Navbar />
        <div className="main_content">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
