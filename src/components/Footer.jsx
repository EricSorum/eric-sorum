import React from 'react';
import style from '../style/Footer.module.css';

function Footer() {
  return (
    <div>
      <p className={style.footerText}>Copyright 2022 Eric J. Sorum</p>
      <p>
        Background image by
        {' '}
        <a href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1837442">
          Gordon Johnson
        </a>
        {' '}
        from
        {' '}
        <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1837442">
          Pixabay
        </a>
      </p>
    </div>
  );
}

export default Footer;
