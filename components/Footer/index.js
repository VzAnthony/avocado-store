import React from 'react'
import Link from 'next/link'
import { footer, footer__item, footer__item__title, footer__item__anchor } from './Footer.module.css'

function Footer() {
  return (
    <footer className={footer}>
      <div className={footer__item}>
        <h4 className={footer__item__title}>Nosotros</h4>
        <Link  href="/about">
          <a className={footer__item__anchor}>About Us</a>
        </Link>
      </div>
      <div className={footer__item}>
        <h4 className={footer__item__title}>Servicios</h4>
        <Link  href="/">
          <a className={footer__item__anchor}>All the products</a>
        </Link>
      </div>
      <div className={footer__item}>
        <h4 className={footer__item__title}>Hecho para</h4>
        <Link  href="">
          <p>
            <a className={footer__item__anchor}>Mi proximo portafolio</a>  
          </p>
        </Link>
      </div>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </footer>
  )
}

export default Footer
