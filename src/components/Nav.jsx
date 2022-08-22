import React from 'react';
import style from '../style/Nav.module.css';
import resume from './resume/EJSorumResume2022.pdf';
import download from './images/download.svg';

function Nav() {
  return (
    <nav>
      <div className={style.line} />
      <a href="#home">Home</a>
      <a href="#about">About </a>
      <a href="#portfolio">Portfolio </a>
      <a href="#contact">Contact </a>
      <a href={resume} download>
        <div className={style.resume}>
          <img src={download} alt="Download icon" className={style.download} />
          Resume
        </div>
      </a>
    </nav>
  );
}

export default Nav;
