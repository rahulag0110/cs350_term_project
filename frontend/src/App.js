import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Event from './Components/Event';
import { UserContext } from './Hooks/UserContext';




function App() {
  const [user, setUser] = useState('123');
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <>
    <UserContext.Provider value = {value}>
      <Routes>
        
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/events' element={<Event />}/>
        
      </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
