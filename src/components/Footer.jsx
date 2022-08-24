import React from 'react'
import style from '../style/Footer.module.css'
import github from './images/github.svg'

function Footer() {
  return (
    <div><a href="https://github.com/EJSorum/eric-sorum" className={style.footerDiv}>Designed and Built by Eric Sorum <img src={github} alt="Github icon" className={style.linkIcon}/></a></div>
  )
}

export default Footer