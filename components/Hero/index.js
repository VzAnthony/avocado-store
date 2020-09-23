import React from 'react'
import Link from 'next/link'
import { hero, hero__title, hero__anchor, hero__title__image } from './hero.module.css'

function Hero() {
  return (
    <div className={hero}>
      <h1 className={hero__title}>
        AVO
        <picture>
          <img className={hero__title__image} src="svg/avocado.svg" alt="SVG"/>
        </picture>
        CADO
      </h1>
      <Link href="/yes-or-not">
        <a className={hero__anchor}>¿Deberia comer un avocado hoy?</a>
      </Link>
    </div>
  )
}

export default Hero
