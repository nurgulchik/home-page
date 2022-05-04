import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Portfolio1 from "../../images/karagat.png";
import Portfolio2 from "../../images/tilordo.png";
import Portfolio3 from "../../images/hospice.png";

import "./about.scss";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <h1>Hello, I am Nurgul Choiubekova</h1>
          <p>Frontend React Developer 💻</p>
        </div>

        <div className="about__skills">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 />
              HTML
            </li>
            <li>
              <FaCss3Alt />
              CSS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <FaSass />
              SASS
            </li>
            <li>
              <FaReact />
              React
            </li>
           
         
          </ul>
        </div>

        <div className="about__portfolio">
          <h3>Latest Works</h3>
          <ul>
            <li>
              <img src={Portfolio1} alt="" />
              <h4>Karagat Cakes Website</h4>
            </li>
            <li>
              <img src={Portfolio2} alt="" />
              <h4>TilOrdo Website</h4>
            </li>
            <li>
              <img src={Portfolio3} alt="" />
              <h4>Landing Page</h4>
            </li>
            
          </ul>
        </div>
  
      </div>
    </section>
  );
}

export default About;