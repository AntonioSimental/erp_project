"use client"
import styles from "../../../../src/styles/pageStyles/Employees.module.css";
import { useState, useEffect } from "react";
import ThemeBtn from "@/src/components/ThemeBtn";

export default function Employees() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://69acbb58b50a169ec87decb1.mockapi.io/api/gema",
      );
      const parsedData = await data.json();
      setData(parsedData);
    };

    getData();
  }, []);

  // Theme
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setTheme(saved === "dark");
  }, []);

  const color = theme ? "#2a2a2a" : "#f5f5f5";

  return (
    <div className={styles.container}>
      <ThemeBtn theme={theme} setTheme={setTheme}/>
      <div className={styles.head}>
        <h2 className={styles.headItem}>Employees</h2>
        <button className={styles.headItem}>Add Employeed</button>
      </div>

      <div className={styles.containerTable}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Skin</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td><img className={styles.image} src={data.image} alt="" /></td>
                <td>{data.client}</td>
                <td>{data.total}</td>
                <td>{data.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
