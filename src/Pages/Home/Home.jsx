import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { init } from 'ityped';

import Photo from "../../images/my-photo.jpg";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
      init(animatedTextRef.current, {
        showCursor: true,
        strings: ['Frontend React Developer 💻'],
        backDelay:  1600,
        backSpeed:  100,
      });
  }, []); 
  
  return (
    <section className="home">
      <div className="container home__container">
      <div className="home__left">
        <h1 className="home__title">Nurgul Choiubekova</h1>
        <p className="home__subtitle">
          <span ref={animatedTextRef}></span>
        </p>
        <p>I do websites. Armed with the best available layout technologies such as HTML5, CSS3, JavaScript, BOOTSTRAP,SASS, React... . I also provide some additional web development services. For me, this is not just a hobby, but the main income, and therefore I take my work seriously and with great responsibility.</p>
        <ul className="home__links">
          <li>
            <a href="https://fb.com" target="_blank" rel="noopener nooreferrer" >
              <FaFacebook className='home__icon' />
            </a>
          </li>
          <li>
            <a href="https://github.com/nurgulchik" target="_blank" rel="noopener nooreferrer" >
              <FaGithub className='home__icon'/>
              </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener nooreferrer" >
              <FaLinkedinIn className='home__icon'/>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener nooreferrer" >
              <FaTelegram className='home__icon'/>
            </a>
          </li>
        </ul>
        <Link to="/contact" className='home__cta' >Hire Me</Link>
      </div>
      <div className="home__right">
        <img src={Photo} alt="Nurgul_Choiubekova" />
      </div>
      </div>
   </section>
  );
}

export default Home