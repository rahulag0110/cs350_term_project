import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Event from './Components/Event';




function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/events' element={<Event />}/>
      </Routes>
    </>
  );
}

export default App;
