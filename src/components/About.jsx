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
            My life has been defined by self-starting and curiosity. It’s no wonder the 
            past year of teaching myself to code has been perhaps the most fulfilling 
            period in my life.
            </p>
            <p>
            I have been crazy about computers ever since I first played around on the DOS 
            prompt of my dad’s i386.  I went to computer camp in middle school to learn 
            C++ and dreamt of being a real programmer.  The past 15 years have seen me 
            pursue other passions, representing a diverse set of experiences requiring 
            excellent communication and creativity:
            </p>
            <ul>
              <li>Held leadership positions at nonprofits and businesses for 12+ years.</li>
              <li>Hired, trained, and managed teams of 30+ staff members.</li>
              <li>Personally planned and led 50+ performance events.</li>
              <li>Performed with world-class organizations such as the Minnesota Opera 
                and Bach Society of Minnesota for 10+ years.</li>
              <li>Led volunteers in local activism and research, meeting with city and 
                state policymakers to promote affordable housing.</li>
            </ul>
            <p>
            Computers have once again emerged as my true passion, and returning to code 
            has felt like coming home.
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
            <p>I look forward to beginning my first job as a software developer.  My diverse 
              experience and aptitude for learning will make me invaluable to your company.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
