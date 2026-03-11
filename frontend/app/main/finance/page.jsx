"use client"
import SectionFlex from "@/src/components/SectionFlex";
import styles from "../../../src/styles/pageStyles/Finance.module.css"
import NavLink from "@/src/components/NavLink";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoneyBill, faClock, faPager, faHandHoldingDollar, faNewspaper, faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import ThemeBtn from "@/src/components/ThemeBtn";

export default function Finance() {
  const [navState, setNavState] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const showNav = () => {
    setNavState(!navState)
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://69acbb58b50a169ec87decb1.mockapi.io/api/gema");
      const parsedData = await data.json();
      setData(parsedData)
    }

    const getData2 = async () => {
      const data2 = await fetch("https://69acbb58b50a169ec87decb1.mockapi.io/api/expenses");
      const parsedData2 = await data2.json();
      setData2(parsedData2)
    }

    getData2()
    getData()
  },[])

  // Theme
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setTheme(saved === "dark");
  }, []);

  const color = theme ? "#2a2a2a" : "#f5f5f5";

  return (
    <div className={styles.container}>
      <div style={{"alignItems": navState ? "center" : ""}}  className={styles.containerNav}>
          {navState ? (
            <div className={styles.slidebar}>
              <button onClick={showNav} className={styles.burgerBtn}><FontAwesomeIcon icon={faBars}/></button>
              <NavLink link="" text={<><FontAwesomeIcon icon={faMoneyBill} /> Finance</>} color="#fff"/>
              <NavLink link="" text={<><FontAwesomeIcon icon={faClock} /> Dashboard</>} color="#fff"/>
              <NavLink link="" text={<><FontAwesomeIcon icon={faPager} /> Invoices</>} color="#fff"/>
              <NavLink link="" text={<><FontAwesomeIcon icon={faHandHoldingDollar} />Expenses</>} color="#fff"/>
              <NavLink link="" text={<><FontAwesomeIcon icon={faNewspaper} /> Reports</>} color="#fff"/>
            </div>
          ): (
          <div style={{"alignItems": navState ? "" : "center"}}  className={styles.slidebar}>
            <button onClick={showNav} className={styles.burgerBtn}><FontAwesomeIcon icon={faBars}/></button>
            <NavLink link="" text={<FontAwesomeIcon icon={faMoneyBill} />}color="#fff"/>
            <NavLink link="" text={<FontAwesomeIcon icon={faClock} />} color="#fff"/>
            <NavLink link="" text={<FontAwesomeIcon icon={faPager} />} color="#fff"/>
            <NavLink link="" text={<FontAwesomeIcon icon={faHandHoldingDollar} />} color="#fff"/>
            <NavLink link="" text={<FontAwesomeIcon icon={faNewspaper} />}color="#fff"/>
          </div>
        )}
        
      </div>
      <SectionFlex height="150vh" bg={color}>
        <ThemeBtn theme={theme} setTheme={setTheme}/>
        <h2 style={{"marginTop": "-390px"}}>Finance Dashboard</h2>
        <div className={styles.containerCards}>
          <div className={`${styles.card} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faCircleDollarToSlot}/> Total Income</h3>
            <p>$52,400</p>
          </div>
          <div className={`${styles.card} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faPager} /> Total Exprenses</h3>
            <p>$52,400</p>
          </div>
          <div className={`${styles.card} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faClock} /> Pending Invoices</h3>
            <p>$52,400</p>
          </div>
          <div className={`${styles.card} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faNewspaper} /> Balance</h3>
            <p>$52,400</p>
          </div>
        </div>
        <div className={`${styles.graphic} ${theme ? "" : styles.light}`}>
          <h2>Income & Expenses Overview</h2>
          <p className={styles.graphicText}>$25,000</p>
          <p className={styles.graphicText}>$20,000</p>
          <p className={styles.graphicText}>$15,000</p>
          <p className={styles.graphicText}>$10,000</p>
          <p className={styles.graphicText}>$5,000</p>
        </div>

        <div className={styles.containerCards}>
          <div className={styles.containerTable}>
            <h2>Invoices</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Client</td>
                  <td>Total</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => (
                  <tr key={data.id}>
                    <td>
                      {data.id}
                    </td>
                    <td>
                      {data.client}
                    </td>
                    <td>
                      ${data.total}
                    </td>
                    <td>
                      {data.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.containerTable}>
            <h2>Recent Expenses</h2>
            <table>
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Description</td>
                  <td>Category</td>
                  <td>Date</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody>
                {data2.map((data) => (
                  <tr key={data.id}>
                    <td>
                      {data.id}
                    </td>
                    <td>
                      {data.description}
                    </td>
                    <td>
                      {data.category}
                    </td>
                    <td>
                      {data.date}
                    </td>
                    <td>
                      {data.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionFlex>
    </div>
  )
}