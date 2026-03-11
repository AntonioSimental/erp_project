"use client"
import styles from "../../../src/styles/pageStyles/Rh.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendar, faPaperclip, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ThemeBtn from "@/src/components/ThemeBtn";

export default function Rh() {
  const [data, setData] = useState([]);
  useEffect(() => {
      const getData = async () => {
        const data = await fetch("https://69acbb58b50a169ec87decb1.mockapi.io/api/gema");
        const parsedData = await data.json();
        setData(parsedData)
      }

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
    <div style={{"background": color}} className={styles.container}>
      <ThemeBtn theme={theme} setTheme={setTheme}/>
      <h2>Human resources</h2>
      <div className={styles.containerCards}>
        <div className={styles.card}>
          <h3><FontAwesomeIcon icon={faUsers} /> Total Employees</h3>
          <p>142</p>
        </div>
        <div className={styles.card}>
          <h3><FontAwesomeIcon icon={faCalendar} /> Present Today</h3>
          <p>125</p>
        </div>
        <div className={styles.card}>
          <h3><FontAwesomeIcon icon={faPaperclip} /> Pending Leave</h3>
          <p>$7,200</p>
        </div>
        <div className={styles.card}>
          <h3><FontAwesomeIcon icon={faDollarSign} /> Payroll This Month</h3>
          <p>$52,400</p>
        </div>
      </div>

      <div className={styles.containerCards}>
        <div className={styles.containerTable}>
          <table>
            <thead>
              <tr>
                <th>Employees Activity</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <tr key={data.id}>
                  <td><img className={styles.image} src={data.image} alt="" /></td>
                  <td>{data.client}</td>
                  <td>{data.job}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.graphic}>
          <h2>Income & Expenses Overview</h2>
          <p className={styles.graphicText}>$25,000</p>
          <p className={styles.graphicText}>$20,000</p>
          <p className={styles.graphicText}>$15,000</p>
          <p className={styles.graphicText}>$10,000</p>
          <p className={styles.graphicText}>$5,000</p>
        </div>
      </div>
    </div>
  )
}