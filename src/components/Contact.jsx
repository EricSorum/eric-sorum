import React from 'react';
import style from '../style/Contact.module.css';

function Contact() {
  return (
    <div className={style.contactDiv}>
      <div className={style.headerDiv}>
        <h2 id="contact" className={style.contactHeader}>
          Contact
        </h2>
        <div className={style.line} />
      </div>
      <br />
      <div className={style.addressBlock}>
        <p className={style.contactText}>
          Please reach out by email or learn more about me on my LinkedIn or GitHub profiles:
        </p>
        <br />
        <div className={style.contactButtonDiv}>
          <a href="mailto:ejsorum@gmail.com">
            <div className={style.contactButton}>Email: ejsorum@gmail.com</div>
          </a>
          <a href="https://www.linkedin.com/in/eric-sorum-894b55183/">
            <div className={style.contactButton}>Find me on LinkedIn</div>
          </a>
          <a href="https://github.com/EJSorum">
            <div className={style.contactButton}>View my GitHub profile</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
