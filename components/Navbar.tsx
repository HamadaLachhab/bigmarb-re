import Image from "next/image";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import logo from "../public/bigmarbre.png";

import navStyle from "../styles/Navbar.module.css";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={navStyle.container}>
      <div className={navStyle.logo}>
        {" "}
        <Image src={logo} alt="bigmarbre" className={navStyle.image} />
      </div>
      <button className={navStyle.hamburger}>
        {/* icon from heroicons.com */}

        <Hamburger
          rounded
          label="Show menu"
          toggled={isOpen}
          toggle={() => {
            setOpen(() => !isOpen);
            console.log(isOpen);
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
            <span>Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
