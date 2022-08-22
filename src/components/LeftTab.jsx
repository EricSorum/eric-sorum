import React from 'react';
import style from '../style/LeftTab.module.css';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import email from './images/email.svg';

function LeftTab() {
  return (
    <div className={style.leftTabDiv}>
      <a href="mailto:ejsorum@gmail.com">
        <img src={email} alt="Email" className={style.linkIcon} />
      </a>
      <a href="https://github.com/EJSorum">
        <img src={github} alt="GitHub" className={style.linkIcon} />
      </a>
      <a href="https://www.linkedin.com/in/eric-sorum-894b55183/">
        <img src={linkedin} alt="LinkedIn" className={style.linkIcon} />
      </a>
      <div className={style.line} />
    </div>
  );
}

export default LeftTab;
