import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import logo from "../public/bigmarbre.png";
import { useRouter } from "next/router";
import navStyle from "../styles/Navbar.module.css";
function Navbar() {
  const router = useRouter();
  const { locale, defaultLocale, locales, pathname, query, asPath } = router;
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("Fr");
  const [isOpen, setOpen] = useState(false);
  // useEffect(() => {
  //   setOpen(false);
  // }
  const path = router.pathname;

  return (
    <nav className={navStyle.container}>
      <div className={navStyle.logo}>
        {" "}
        <Link href="/">
          <Image src={logo} alt="bigmarbre" className={navStyle.image} />
        </Link>
      </div>
      <button className={navStyle.hamburger}>
        {/* icon from heroicons.com */}

        <Hamburger
          rounded
          label="Show menu"
          toggled={isOpen}
          toggle={() => {
            setOpen(() => !isOpen);
            
          }}
        />
      </button>
      <div
        className={
          !isOpen
            ? navStyle.navigationMenu
            : `${navStyle.navigationMenu} ${navStyle.expanded}`
        }
      >
        <ul>
          <li>
            <Link href="/">
              <span>
                {locale === "fr" ? "Accueil" : "Home"}
                <p className={path === "/" ? `${navStyle.current}` : ""}></p>
              </span>
            </Link>
          </li>
          <li
            className={navStyle.serv_container}
            onClick={() => {
              setShow(() => !show);
            }}
          >
            <span>
              {locale === "fr" ? "Services" : "Services"}
              <p
                className={path === "/services" ? `${navStyle.current}` : ""}
              ></p>
            </span>

            {show && (
              <div className={navStyle.service_div}>
                <div
                  className={
                    path === "/customfit"
                      ? `${navStyle.elem} ${navStyle.cur1}`
                      : `${navStyle.elem}`
                  }
                >
                  <Link href="/customfit">
                    {locale === "fr" ? "Coupe sur Mesure" : "Custom Fit"}
                  </Link>
                </div>
                <div
                  className={
                    path === "/carreaux"
                      ? `${navStyle.elem} ${navStyle.cur1}`
                      : `${navStyle.elem}`
                  }
                >
                  <Link href="/carreaux">
                    {locale === "fr" ? "Carreaux" : "Tiles"}
                  </Link>
                </div>
                <div
                  className={
                    path === "/bloc"
                      ? `${navStyle.elem} ${navStyle.cur1}`
                      : `${navStyle.elem}`
                  }
                >
                  <Link href="/bloc">Bloc </Link>
                </div>
                <div
                  className={
                    path === "/decors"
                      ? `${navStyle.elem} ${navStyle.cur1}`
                      : `${navStyle.elem}`
                  }
                >
                  <Link href="/decors">
                    {locale === "fr" ? "Décors" : "Decors"}
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link href="/products">
              <span>
                {locale === "fr" ? "Catalogue" : "Product"}
                <p
                  className={path === "/products" ? `${navStyle.current}` : ""}
                ></p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>
                {locale === "fr" ? "Présentation" : "About"}
                <p
                  className={path === "/about" ? `${navStyle.current}` : ""}
                ></p>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <span>
                Contact
                <p
                  className={path === "/contactus" ? `${navStyle.current}` : ""}
                ></p>
              </span>
            </Link>
          </li>
          <li className={navStyle.lang}>
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale === "fr" ? "en" : "fr"}
            >
              <span>{locale === "fr" ? "Fr" : "Eng"}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
