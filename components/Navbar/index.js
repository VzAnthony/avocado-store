import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  navbar,
  menu,
  anchor,
  anchor__image,
  active,
} from "./Navbar.module.css";

const Navbar = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <nav className={navbar}>
      <menu className={menu}>
        <Link href="/">
          <a className={`${anchor} ${pathname === "/" ? active : ""}`}>
            <picture>
              <img className={anchor__image} src="svg/avocado.svg" alt="SVG" />
            </picture>
            Avo Store
          </a>
        </Link>
        <Link href="/about">
          <a className={`${anchor} ${pathname === "/about" ? active : ""}`}>
            <picture>
              <img className={anchor__image} src="svg/basket.svg" alt="SVG" />
            </picture>
            Basket
          </a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
