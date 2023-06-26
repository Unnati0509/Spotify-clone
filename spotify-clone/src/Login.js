import React from 'react'
import './Login.css';
import { loginURL } from './spotify';

function Login() {
  return (
    <div className='login'>
    {/* Spotify logo */}
    <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png'></img>
    {/* Spotigy login url */}
      <a href={loginURL}>Login to spotify</a>
    </div>
  )
}

export default Login;
