import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from "./Player"




// 70b3b9f9265844e798e8d5c0aa21f825


const spotify= new SpotifyWebApi();




function App() {

  const [token, setToken] = useState(null);





  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token) {
        setToken(_token)

        spotify.setAccessToken(_token)

        spotify.getMe().then(user => {
          console.log('iervnienrvpvbr',user);
        });
      }



      console.log('THis is it for me')

    }, []);






  return (
    <div className="App">
      
      { token? <Player/> : <Login/> }
      
      
      </div>
  );
}

export default App;
