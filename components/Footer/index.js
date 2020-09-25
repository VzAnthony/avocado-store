import React from "react";
import Link from "next/link";
import {
  footer,
  footer__container,
  footer__container__list,
  footer__container__list__item,
  footer__container__list__item__title,
  footer__container__list__item__anchor,
  footer__source_icon,
} from "./Footer.module.css";

function Footer() {
  return (
    <footer className={footer}>
      <div className={footer__container}>
        <div className={footer__container__list}>
          <div className={footer__container__list__item}>
            <h4 className={footer__container__list__item__title}>Nosotros</h4>
            <Link href="/about">
              <a className={footer__container__list__item__anchor}>About Us</a>
            </Link>
          </div>
          <div className={footer__container__list__item}>
            <h4 className={footer__container__list__item__title}>Servicios</h4>
            <Link href="/">
              <a className={footer__container__list__item__anchor}>
                All the products
              </a>
            </Link>
          </div>
          <div className={footer__container__list__item}>
            <h4 className={footer__container__list__item__title}>Hecho para</h4>
            <Link href="/">
              <p>
                <a className={footer__container__list__item__anchor}>
                  Mi proximo portafolio
                </a>
              </p>
            </Link>
          </div>
        </div>
        <div className={footer__source_icon}>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
