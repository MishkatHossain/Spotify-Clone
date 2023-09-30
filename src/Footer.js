import React from 'react';
import "./Footer.css";


import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';


function Footer() {
  return (
    <div className="footer">
        <div className="footer__left">
          
          <img 
            className='footer_albumLogo'
            src="" 
            alt=""
          />
          
          <div className='footer__songInfo'>
            <h4>Yeah!</h4>
            <p>Usher</p>
          </div>
        </div>

        <div className="footer__center">
          <Shuffle className="footer__green"/>
          <SkipPrevious className="footer__icon"/>
          <PlayCircleOutline fontSize='large' className='footer__icon'/>
          <SkipNext className="footer__icon"/>
          <Repeat className='footer__green'/>
        </div>

        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlay/>
            </Grid>

            <Grid item>
              <VolumeDown/>
            </Grid>

            <Grid item xs>
              <Slider/>
            </Grid>



          </Grid>

        </div>

    </div>
  );
}

export default Footer;