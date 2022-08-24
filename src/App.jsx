import React from 'react';
import style from './style/App.module.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import LeftTab from './components/LeftTab';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className={style.AppDiv}>
      <Logo />
      <Nav />
      <LeftTab />
      <div className={style.sections}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
