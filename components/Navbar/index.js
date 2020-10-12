import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBasket } from "@components/basketContext";
import {
  navbar,
  menu,
  anchor,
  anchor__image,
  active,
} from "./Navbar.module.css";

const Navbar = () => {
  const car = useBasket();
  console.log(car);
  const { pathname } = useRouter();
  return (
    <nav className={navbar}>
      <menu className={menu}>
        <Link href="/">
          <a className={`${anchor} ${pathname === "/" ? active : ""}`}>
            <picture>
              <img className={anchor__image} src="svg/avocado.svg" alt="SVG" />
            </picture>
            <b>Avo Store</b>
          </a>
        </Link>
        <Link href="/basket">
          <a className={`${anchor} ${pathname === "/basket" ? active : ""}`}>
            <picture>
              <img className={anchor__image} src="svg/basket.svg" alt="SVG" />
            </picture>
            <b>{`Basket (${car.basket.length})`}</b>
          </a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
