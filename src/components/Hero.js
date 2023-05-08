import "./Hero.css";
import React from 'react'
import IntroImg from "../assests/1767974.webp";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro image" />
      </div>
      <div className="content">
        <p>Hi, I am Marissa</p>
        <h1>MERN Full Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero