import React from 'react';
import style from '../style/Home.module.css';
import resume from './resume/EJSorumResume2022.pdf';

function Home() {
  return (
    <div className={style.homeDiv} id="home">
      <div className={style.homeBlock}>
        <div className={style.headerDive}>
          <h1 className={style.homeHeader}>Eric Sorum</h1>
          <h1 className={style.subHeader}>Self-taught Software Developer</h1>
        </div>
        <p>
          Proficient in:
          <span className={style.blueText}> JavaScript, HTML, CSS, React, </span>
          and other web technologies.
        </p>
        <p>
          I am currently seeking my first Junior Software Developer position. My proven dedication
          to learning and passion for coding will quickly make me a productive member of your team.
        </p>
        <div className={style.resumeButtons}>
          <a href={resume}>
            <div className={style.resumeButton}>View resume</div>
          </a>
          <a href={resume} download>
            <div className={style.resumeButton}>Download resume</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
