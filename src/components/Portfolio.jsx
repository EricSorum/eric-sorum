import React from 'react';
import style from '../style/Portfolio.module.css';
import veggies from './images/veggies.jpg';
import beer from './images/beer.jpg';
import architecture from './images/architecture.jpg';
import max from './images/max.jpg';
import gallery from './images/gallery.jpg';
import pantry from './images/pantry.jpg';
import tea from './images/tea.jpg';
import site from './images/site.svg';
import github from './images/github.svg';

function Portfolio() {
  return (
    <div className={style.portfolioDiv}>
      <div className={style.portfolioBlock}>
        <div className={style.headerDiv}>
          <h2 id="portfolio" className={style.portfolioHeader}>
            Portfolio
          </h2>
          <div className={style.line} />
        </div>
        <div className={style.projectList}>
          <div className={style.card}>
            <a href="https://ejsorum.github.io/recipe-site/">
              <img src={veggies} alt="Veggies First" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/recipe-site/">
                  <div className={style.projectTitle}>Veggies First</div>
                </a>
                <div className={style.linkGroup}>
                  <a href="https://ejsorum.github.io/recipe-site/" className={style.linkSet}>
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/recipe-site" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  Uses the spoonacular.com API to search recipes by ingredient. By clicking a veggie
                  button, a list is displayed of recipes using that veggie. Users may also select
                  the number of recipes to display, and create a custom search for any ingredient.
                </p>
                <ul>
                  <li>Functional React components with the useState and useEffect Hooks.</li>
                  <li>Async functions to fetch recipe image, ingredients, and instructions.</li>
                  <li>Type checking with PropTypes.</li>
                  <li>Data extraction from JSON files.</li>
                  <li>Form submission.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Beer-Tools/dist/index.html">
              <img src={beer} alt="Beer Tools" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/Beer-Tools/dist/index.html">
                  <div className={style.projectTitle}>Beer Tools</div>
                </a>
                <div className={style.linkGroup}>
                  <a
                    href="https://ejsorum.github.io/Beer-Tools/dist/index.html"
                    className={style.linkSet}
                  >
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/Beer-Tools" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  Performs calculations useful to the beer industry: Converting Julian dates into
                  Gregorian Dates; ABV and volume into number of standard drinks, and finding the
                  value per ounce of packaging formats.
                </p>
                <ul>
                  <li>Rendered using modular functions and Webpack.</li>
                  <li>Formatted with Prettier, ESLint, and Husky.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Pantry/index.html">
              <img src={pantry} alt="Pantry" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/Pantry/index.html">
                  <div className={style.projectTitle}>Pantry</div>
                </a>
                <div className={style.linkGroup}>
                  <a href="https://ejsorum.github.io/Pantry/index.html" className={style.linkSet}>
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/Pantry" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  Generates a grocery list, allowing users to create items, delete items, and send
                  items to the top.
                </p>
                <ul>
                  <li>DOM manipulation using vanilla JavaScript.</li>
                  <li>Splice, for loops, and factory functions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://abcd-architecture.herokuapp.com/">
              <img src={architecture} alt="ABCD Architecture" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://abcd-architecture.herokuapp.com/">
                  <div className={style.projectTitle}>ABCD Architecture</div>
                </a>
                <div className={style.linkGroup}>
                  <a href="https://abcd-architecture.herokuapp.com/" className={style.linkSet}>
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/architecture-page" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  A six-page website for a fictional company. Home page designed after
                  {' '}
                  <a href="http://www.dfdg.com">dfdg.com</a> with a drop-down menu.
                </p>
                <ul>
                  <li>React Router.</li>
                  <li>CSS animations.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/react-landing/">
              <img src={max} alt="Max" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/react-landing/">
                  <div className={style.projectTitle}>Max's Landing Page</div>
                </a>
                <div className={style.linkGroup}>
                  <a href="https://ejsorum.github.io/react-landing/" className={style.linkSet}>
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/react-landing" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  A landing page for a fictional musician.  Demonstrates layout skills using React components to 
                  render repetitive elements.
                </p>
                <ul>
                  <li>Responsive web design for mobile.</li>
                  <li>React with functional components and props.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/tea-shop/">
              <img src={tea} alt="Tea Shop" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/tea-shop/">
                  <div className={style.projectTitle}>Tea Shop</div>
                </a>
                <div className={style.linkGroup}>
                  <a href="https://ejsorum.github.io/tea-shop/" className={style.linkSet}>
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/tea-shop" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>
                  User may browse various iced teas and create a custom cup on an order form.  
                  Both menu items and custom items may be moved into the cart, displaying the price 
                  according to their size.</p>
                  <ul>
                    <li>React with class components using state and props.</li>
                    <li>.map() and .filter() methods.</li>
                    <li>Event handling.</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <a href="https://ejsorum.github.io/Gallery/dist/index.html">
              <img src={gallery} alt="Gallery" className={style.projectImg} />
            </a>
            <div>
              <div className={style.projectHeader}>
                <a href="https://ejsorum.github.io/Gallery/dist/index.html">
                  <div className={style.projectTitle}>Gallery</div>
                </a>
                <div className={style.linkGroup}>
                  <a
                    href="https://ejsorum.github.io/Gallery/dist/index.html"
                    className={style.linkSet}
                  >
                    Go to site
                    {' '}
                    <img src={site} alt="Link arrow" className={style.linkIcon} />
                  </a>
                  <a href="https://github.com/EJSorum/Gallery" className={style.linkSet}>
                    GitHub repo
                    {' '}
                    <img src={github} alt="Github icon" className={style.linkIcon} />
                  </a>
                </div>
              </div>
              <div className={style.textBlock}>
                <p className={style.description}>Dynamically generates an image gallery.  
                User may click on an image to put it in the center and display the photography credit in the footer.</p>
                <ul>
                  <li>Modular functions.</li>
                  <li>Webpack.</li>
                  <li>CSS Grid.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
