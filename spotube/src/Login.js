import React from 'react'
import spotubelogo from './images/Spotify_Primary_Logo_RGB_Black.png';
import './Login.css'
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login'>
            {/* This will be the main page having the logo and login button */}
            <img
                src={spotubelogo}
                alt=''
            />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a> {/*I am using a link because upon clicking it users will be redirected to spotify service to login */}
        </div>
    )
}

export default Login
