import { Link } from "react-router-dom"
import "./AboutContent.css"
import img1 from "../assests/51.webp";
import img2 from "../assests/mern.png"

import React from 'react'

const AboutContent = () => {
  return (
      <div className="about">
          <div className="left">
              <h1>Who A I?</h1>
              <p>ureigfoerjfoeri;jgoerijgre</p>
              <Link to="/contact">
                <button className="btn">Contact</button>
              </Link>
          </div>

          <div className="right">
              <div className="img-container">
                  <div className="img-stack top">
                      <img src={img1} className="img" alt="true" />
                  </div>
                  <div className="img-stack bottom">
                      <img src={img2} className="img" alt="true" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AboutContent