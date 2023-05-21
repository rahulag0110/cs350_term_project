import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register';
import Login from './Login.js'


function App() {
  return (
    <>
    <div>Hello!</div>

    <Register />
    <Login />


    </>
  );
}

export default App;
