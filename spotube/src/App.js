import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null); //Thils line basically initializes a state variable token with a value of null and provides a function setToken to update this state. Whenever setToken is called with a new value, React will re-render the component with the updated state.

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash=""; //This will remove the token from URL so that  no one can see it

    const _token = hash.access_token; //The _ is used by companies to understand better

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token); //This basically is giving the access token to spotify API
      spotify.getMe().then(user => {
        console.log(user)
      })
    }

  }, []); //If anything in the URL changes I want to fire off some code. When we are redirected back from spotify to my clone i want to keep token in token variable

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
