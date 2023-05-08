import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>11401 Church Canyon Dr</p>
                        <p>Austin, TX</p>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            (737) 247-5556
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            marissa.martinez91@outlook.com
                        </h4>
                    </div>
                </div>
              </div>
              
              <div className="right">
                  <h4>About the company:</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis itaque ipsa, saepe eos,
                      aspernatur quam quis reprehenderit tenetur eveniet quae laudantium aut, quo praesentium
                      error amet! Tempore, id repellendus.
                  </p>
                  <div className="social">
                      <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                      <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                  </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Footer