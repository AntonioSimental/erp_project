"use client";

import styles from "../styles/componentStyles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "@/src/components/NavLink";
import Login from "./sections/Login";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ show, children }) {
  const [stateCard, setStateCard] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const display = stateCard ? "inline-block" : "none";
  const validPath = usePathname() === "/";

  const mostrar = () => {
    setStateCard(!stateCard);
  };

  const showLogin = () => {
    setLoginState(!loginState);
  };

  return (
    <>
      <nav className={styles.container}>
        <Image
          src="/assets/logoGema.png"
          alt="logo"
          width="50"
          height="50"
          className={styles.logo}
        />
        <button onClick={mostrar} className={styles.burger}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {stateCard && <div onClick={mostrar} className={styles.overlay}></div>}

        {validPath ? (
          <>
            <NavLink display={display} link="#Home" text="Home" />
            <NavLink display={display} link="#About" text="About" />
            <NavLink display={display} link="#Services" text="Services" />
            <div onClick={showLogin}>
              <NavLink
                display={display}
                link="#Login"
                text="Start"
                color="#fb0"
              />
            </div>
          </>
        ) : (
          <>
            <NavLink display={display} link="/main" text="Home" />
            <NavLink display={display} link="/main/shop" text="Shop" />
            <NavLink display={display} link="/main/settings" text="Settings" />
            <NavLink display={display} link="/" text="Log out" color="#e53935" />
          </>
        )}

        {children}
      </nav>

      {loginState && <Login action={() => showLogin()} />}
    </>
  );
}
