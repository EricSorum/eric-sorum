import React from 'react';
import octagon from './images/octagon.svg';
import style from '../style/Logo.module.css';

function Logo() {
  return (
    <a href="#home">
      <div className={style.logoDiv}>
        <img src={octagon} alt="Logo" className={style.octagon} />
        <span className={style.logoText}>EJS</span>
      </div>
    </a>
  );
}

export default Logo;
