import React from 'react'
import styles from './header.module.css'

const Header = () => (
  <section className={styles.header}>
    <h1 className={styles.intro}><span>Victor Nery</span>20, Front-End Developer, <a href="https://www.google.com.br/maps/place/Fortaleza+-+CE/@-3.7900979,-38.5891586,12z/data=!3m1!4b1!4m8!1m2!2m1!1sFortaleza!3m4!1s0x7c74c3f464c783f:0x4661c60a0c6b37ca!8m2!3d-3.7327144!4d-38.5269981?hl=pt-BR" target="_blank" rel="noopener noreferrer">Fortaleza</a>.</h1>
  </section>
)

export default Header