import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { UserContext } from './Hooks/UserContext';
import Register from './Components/Register';
import Login from './Components/Login';
import HomeAfterLogin from './Components/HomeAfterLogin';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import HostEvent from './Components/HostEvent';
import HostedEventDetail from './Components/HostedEventDetail';
import EventDetail from './Components/EventDetail';

function App() {
  // window.localStorage.setItem("current_user", 'no_user')
  const [user, setUser] = useState('no_user');
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <>
    <UserContext.Provider value = {value}>
      <Routes>
        
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/afterlogin' element={<HomeAfterLogin />}/>
        <Route exact path='/userprofile' element={<UserProfile />}/>
        <Route exact path='/hostevent' element={<HostEvent />}/>
        <Route exact path='/hostedeventdetail/:eventId' element={<HostedEventDetail />}/>
        <Route exact path='/eventdetail/:eventId' element={<EventDetail />}/>

        
        
      </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
