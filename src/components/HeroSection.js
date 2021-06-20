import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import video from '../video/bmw-video.mp4'


function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src={video}
        autoPlay
        loop
        muted
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
         <a href="https://www.youtube.com/watch?v=SDn1vfT-9Bo">Watch trailer <i className="far fa-play-circle" /></a>
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
