import React from 'react';
import { animate, motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Portfolio1 from "../../images/karagat.png";
import Portfolio2 from "../../images/tilordo.png";
import Portfolio3 from "../../images/hospice.png";

import "./about.scss";

function About() {
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

   

  const workVariantsX = {
    visible: (idx) => ({
      opacity: 2,
      x: 0,
      transition: {
        duration: 0.5,
        delay: idx * 1,
      }
    }),
    hidden: { 
      opacity: 0,
      x: 300 },
 };


  const workVariantsY = {
     visible: (idx) => ({
       delay: 2,
       opacity: 2,
       y: 0,
       transition: {
         delay: idx * 2
       }
     }),
     hidden: { 
       opacity: 0,
       y: 200 },
  };

  const worksX = [
    {
      title: "Karagat Cakes Website",
      imgUrl: Portfolio1,
    },
    {
      title: "TilOrdo Website",
      imgUrl: Portfolio2,
    },
    {
      title: "Landing Page",
      imgUrl: Portfolio3,
    },
  ]

  const worksY = [
    {
      title: "Karagat Cakes Website",
      imgUrl: Portfolio3,
    },
    {
      title: "TilOrdo Website",
      imgUrl: Portfolio1,
    },
    {
      title: "Landing Page",
      imgUrl: Portfolio2,
    },

  ]
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1 
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'spring',
          }}
          >Hello, I am Nurgul Choiubekova</motion.h1>
          <motion.p
             whileHover={{
            scale: 1.2,
            backgroundColor: "red",
          }}
          >Frontend React Developer 💻</motion.p>
        </div>

        <div className="about__skills">
          <motion.h3
          variants={h3Variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 1,
          }}
          >
            My Skills</motion.h3>
          <ul>
            <motion.li
            whileHover={{
              scale: 1.5,
              backgroundColor: "yellow",
            }}
            >
              <FaHtml5 />
              HTML
            </motion.li>
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
            {worksX.map((work, idx) => (
              <motion.li 
              variants={workVariantsX}
              initial= {"hidden"}
              animate={"visible"}
              key = {idx}
              custom = {idx}
              >
              <img src={work.imgUrl} alt="" />
              <h4>{work.title}</h4>
            </motion.li> 
            ) )}                                
          </ul>
          <ul>
            {worksY.map((work, idx) => (
              <motion.li 
              variants={workVariantsY}
              initial= {"hidden"}
              animate={"visible"}
              key = {idx}
              custom = {idx}
              >
              <img src={work.imgUrl} alt="" />
              <h4>{work.title}</h4>
            </motion.li> 
            ) )}                                
          </ul>
        </div>
  
      </div>
    </section>
  );
}

export default About;