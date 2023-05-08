import "./Hero.css";
import React from 'react'
import IntroImg from "../assests/1767974.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro image" />
      </div>
    </div>
  )
}

export default Hero