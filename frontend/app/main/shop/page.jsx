"use client";
import SectionFlex from "@/src/components/SectionFlex";
import styles from "../../../src/styles/pageStyles/Shop.module.css";
import NavLink from "@/src/components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlusCircle, faMinusCircle, faShoppingCart, faCubes} from "@fortawesome/free-solid-svg-icons";
import modules from "../../../src/data/MainCards";
import { useState, useEffect } from "react";
import ThemeBtn from "@/src/components/ThemeBtn";

export default function Shop() {
  const [items, setItem] = useState([]);
  const [price, setPrice] = useState(0);

  const addItem = (index) => {
    setItem([...items, modules[index]]);
    setPrice((prev) => prev + 3000 + index);
  };

  const deleteItem = () => {
    setItem([]);
    setPrice(0);
  }

  // Theme
  const [theme, setTheme] = useState(false);
  
    useEffect(() => {
      const saved = localStorage.getItem("theme");
      setTheme(saved === "dark");
    }, []);
  
    const color = theme ? "#2a2a2a" : "#f5f5f5";
  return (
    <SectionFlex bg={color}>
      <ThemeBtn theme={theme} setTheme={setTheme}/>
      <h2>Shop</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faCubes}/> Services</h3>
          </div>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            {modules.map((data, index) => (
              <div
                key={index}
                onClick={() => addItem(index)}
                className={`${styles.serviceCard} ${theme ? "" : styles.cardLight}`}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={modules[index].icon}
                />
                <div className={styles.serviceText}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
                <p>${index + 1 * 3000}</p>
                <FontAwesomeIcon className={styles.icon} icon={faPlusCircle} />
              </div>
            ))}
          </div>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            <div>
              <FontAwesomeIcon icon={faCircleXmark} />
              <NavLink text="Cancel" link="/main" color="#f00" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            <h3><FontAwesomeIcon icon={faShoppingCart}/> Shopping cart</h3>
          </div>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            {price ? (
              items.map((data, index) => (
                <div
                  key={index}
                  onClick={() => deleteItem(index)}
                  className={`${styles.serviceCard} ${theme ? "" : styles.cardLight}`}
                >
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={modules[index].icon}
                  />
                  <div className={styles.serviceText}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                  <p>${index + 1 * 3000}</p>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faMinusCircle}
                  />
                </div>
              ))
            ) : (
              <h3>Add services...</h3>
            )}
          </div>
          <div className={`${styles.cardInfo} ${theme ? "" : styles.light}`}>
            <div className={styles.shopContainer}>
              <p className={styles.info}>Products: {items.length}</p>
              <p className={styles.info}>Price: ${price}</p>
            </div>

            <div className={styles.shopContainer}>
              <button className={styles.button}><FontAwesomeIcon icon={faShoppingCart}/>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </SectionFlex>
  );
}