import React from 'react';
import headshot from './images/headshot.jpg';
import style from '../style/About.module.css';

function About() {
  return (
    <div className={style.aboutDiv}>
      <div className={style.aboutBlock}>
        <div className={style.headerDiv}>
          <h2 id="about" className={style.aboutHeader}>
            About Me
          </h2>
          <div className={style.line} />
        </div>
        <div className={style.backgroundBox} />
        <div className={style.imgAndText}>
          <div>
            <div className={style.headshotBox} />
            <img src={headshot} alt="Eric Sorum" className={style.headshot} />
          </div>
          <div className={style.textBlock}>
            <p>
              My life has been defined by self-starting and curiosity, and its no wonder the past
              year of teaching myself software development has been perhaps the most fulfilling
              period in my life.
            </p>
            <p>
              I have been crazy about computers ever since I first got to play around with the DOS
              prompt on my dad&aposs ancient 486. I went to computer camp in 7th and 8th grade to
              learn C++ and knew that one day I would be a computer programmer.
            </p>
            <p>
              The past 15 years has seen me in numerous leadership positions requiring excellent
              communication and creativity. I thrive when given open-ended goals and a little bit of
              elbow-room
            </p>
            <p>
              My history of self-motivated success will be invaluable to your company. I would be a
              perfect fit for any web development position, with the proven ability to quickly adapt
              and learn any language or technology.
            </p>
            <p>Here are a few of the technologies I currently use:</p>
            <ul className={style.skillList}>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Webpack</li>
              <li>ESLint</li>
              <li>Git/GitHub</li>
              <li>Linux CLI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
