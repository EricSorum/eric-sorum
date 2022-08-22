/*
import React from 'react';
import style from '../style/Card.module.css';
import siteIcon from './images/site.svg';
import githubIcon from './images/github.svg';

function Card({ siteImg, siteUrl, githubUrl }) {
  // const {siteImg, siteUrl, githubUrl} = props;
  return (
    <div className={style.card}>
      <a href={siteUrl}>
        <img src={siteImg} alt="Veggies First" className={style.projectImg} />
      </a>
      <div>
        <div className={style.projectHeader}>
          <a href={siteUrl}>
            <div className={style.projectTitle}>Veggies First</div>
          </a>
          <a href={siteUrl} className={style.linkSet}>
            Go to site
            {' '}
            <img src={siteIcon} alt="Link arrow" className={style.linkIcon} />
          </a>
          <a href={githubUrl} className={style.linkSet}>
            GitHub repo
            {' '}
            <img src={githubIcon} alt="Github icon" className={style.linkIcon} />
          </a>
        </div>
        <div className={style.textBlock}>
          <p className={style.description}>
            Uses the spoonacular.com API to search recipes by ingredient. By clicking a veggie
            button, a list is displayed of recipes using that veggie. Users may also select the
            number of recipes to display, and create a custom search for any ingredient.
          </p>
          <ul>
            <li>functional React components with the useState and useEffect Hooks.</li>
            <li>async functions to fetch recipe image, ingredients, and instructions.</li>
            <li>type checking with PropTypes.</li>
            <li>data extraction from JSON files.</li>
            <li>form submission.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
*/
