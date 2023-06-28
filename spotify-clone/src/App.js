import React, { useEffect, useState } from 'react'
import Login from './Login'
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './Datalayer';


// import { useEffect } from 'react';
//Global object created that will help us to interact with spotifyAPI
const spotify = new SpotifyWebApi();

function App() {
  // const[token,setToken] = useState(null);
  const [{user,token},dispatch]=useDataLayerValue();

  //run code based on a given condition
  useEffect(()=>{
    const hash = getTokenFromURL();
    window.location.hash="";
    const _token = hash.access_token;
    // console.log('I have a token ->',token)
    if(_token){
      // setToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
     
        dispatch({
          type:'SET_USER',
          user:user,

        })
      })
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      })
      spotify.getPlaylist('5dZdcND1dq4rnSl8lMjRHt').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });

    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });
    }

  },[token, dispatch]);
  // console.log('🤠',user);
  // console.log('👾',token);
  return (
    <div className='app'>
     {!token && <Login />}
      {token && <Player spotify={spotify} />}
     
    </div>
  )
}

export default App;
