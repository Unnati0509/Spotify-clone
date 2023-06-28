import React from 'react'
import "./Footer.css";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// import {Grid,Slider} from '@mui/material'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid'; // Grid version 1

function Footer() {
  return (
    <div className='footer'>
    <div className='footer__left'>
<img className='footer__albumLogo' src="https://upload.wikimedia.org/wikipedia/en/b/b6/Tu_Jhoothi_Main_Makkaar_Title_Card.jpeg" alt=""/>
<h4 className='footer__songInfo'>Yeah</h4>
<p className='footer__songInfo'>YES</p>
    </div>

    <div className='footer__center'>
      <ShuffleIcon className='footer__green'></ShuffleIcon>
      <SkipPreviousIcon className='footer__icon'></SkipPreviousIcon>
      <PlayCircleOutlinedIcon fontSize='large' className='footer__icon'></PlayCircleOutlinedIcon>
      <SkipNextIcon className='footer__icon'></SkipNextIcon>
      <RepeatIcon className='footer__green'></RepeatIcon>
    </div>
    <div className='footer__right'>
<Grid container spacing={2}>
  <Grid item>
    <PlaylistPlayIcon/>

  </Grid>
  <Grid item>
    <VolumeDownIcon/>
  </Grid>
  <Grid item xs>
    <Slider/>
  </Grid>
</Grid>
    </div>
    </div>
  )
}

export default Footer
