"use client"
import styles from "../../src/styles/componentStyles/Slidebar.module.css";
import NavLink from "@/src/components/NavLink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoneyBill, faHandHoldingHand, faPager, faHandHoldingDollar, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Slidebar() {
  const [navState, setNavState] = useState(false);

  const showNav = () => {
    setNavState(!navState)
  }

  return (
    <div style={{"alignItems": navState ? "center" : ""}}  className={styles.containerNav}>
      {navState ? (
        <div className={styles.slidebar}>
          <button onClick={showNav} className={styles.burgerBtn}><FontAwesomeIcon icon={faBars}/></button>
          <NavLink link="/main/rh" text={<><FontAwesomeIcon icon={faHandHoldingHand} /> Human Resources</>} color="#fff"/>
          <NavLink link="/main/rh/employees" text={<><FontAwesomeIcon icon={faUser} /> Employees</>} color="#fff"/>
          <NavLink link="" text={<><FontAwesomeIcon icon={faPager} /> Attendance</>} color="#fff"/>
          <NavLink link="" text={<><FontAwesomeIcon icon={faHandHoldingDollar} /> Payrol</>} color="#fff"/>
        </div>
      ) : (
        <div style={{"alignItems": navState ? "" : "center"}}  className={styles.slidebar}>
          <button onClick={showNav} className={styles.burgerBtn}><FontAwesomeIcon icon={faBars}/></button>
          <NavLink link="/main/rh" text={<FontAwesomeIcon icon={faHandHoldingHand} />}color="#fff"/>
          <NavLink link="/main/rh/employees" text={<FontAwesomeIcon icon={faUser} />} color="#fff"/>
          <NavLink link="" text={<FontAwesomeIcon icon={faPager} />} color="#fff"/>
          <NavLink link="" text={<FontAwesomeIcon icon={faHandHoldingDollar} />} color="#fff"/>
        </div>
      )}
    </div>
  )
}