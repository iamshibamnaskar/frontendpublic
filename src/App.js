import './App.css';
import ButtonAppBar from './components/navbar';
import MainPage from './pages/mainpage'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import GalleryPage from './pages/Gallary';
import LoginPage from './pages/login';

import initializeFirebaase from './Firebase/irebase.init'
import { getAuth} from 'firebase/auth';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import AllnoticePage from './pages/loginpage';


initializeFirebaase();



function App() {
  var authstate = getAuth()
  var ss = authstate.app.name;
  console.log(ss)

  const [user,setUser]=useState({})
  const [cookies, setCookie] = useCookies(['logininfo']);

  console.log(authstate.currentUser)
  
  
  return (
    <Router>
      <div className="App">
        <ButtonAppBar/>
        <Routes>
          <Route path='/' element={<LoginPage setUser={setCookie}/>} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/notice' element={<AllnoticePage />} />
          <Route path='/main' element={<MainPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
