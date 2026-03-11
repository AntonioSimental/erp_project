"use client"
import SectionFlex from "@/src/components/SectionFlex";
import styles from "../../src/styles/pageStyles/Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import modules from "../../src/data/MainCards";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeBtn from "@/src/components/ThemeBtn";

export default function MainPage() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setTheme(saved === "dark");
  }, []);

  const color = theme ? "#2a2a2a" : "#f5f5f5";

  return (
    <SectionFlex bg={color}>
      <ThemeBtn theme={theme} setTheme={setTheme}/>

      <div className={styles.container}>
        {modules.map((data, index) => (
          <Link href={data.route} key={index} className={`${styles.card} ${theme ? "" : styles.light }`}>
            <FontAwesomeIcon icon={data.icon} style={{ fontSize: "50px" }}/>
            <h3>{data.title}</h3>
            <p style={{ textAlign: "center" }}>{data.description}</p>
          </Link>
        ))}
      </div>
    </SectionFlex>
  );
}