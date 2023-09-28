import React from 'react'
import { useEffect } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

// 70b3b9f9265844e798e8d5c0aa21f825

function App() {

  useEffect(()=>{
      const token = getTokenFromUrl();
      console.log("I have a token", token);
  }, []);






  return (
    <div className="App">
      
      <Login/>

      </div>
  );
}

export default App;
