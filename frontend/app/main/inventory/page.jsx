"use client";
import styles from "../../../src/styles/pageStyles/Inventory.module.css";
import SectionFlex from "@/src/components/SectionFlex";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Inventory() {
  const [products, setProduct] = useState([]);
  const [inventorys, setInventory] = useState([]);

  const saveProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setProduct([...products, data]);
  };

  const saveInventory = () => {
    setInventory([...inventorys, products]);
    setProduct([]);
  };

  return (
    <SectionFlex bg="#2a2a2a">
      <h2 className={styles.title}>Inventory</h2>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <h2>Add inventory</h2>

          <form className={styles.form} onSubmit={saveProducts}>
            <div className={styles.inputContainer}>
              <label htmlFor="serial">No. Serial:</label>
              <input
                className={styles.input}
                type="number"
                name="serial"
                placeholder="Serial"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="product">Product:</label>
              <input
                className={styles.input}
                type="text"
                name="product"
                placeholder="Product"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="amount">Amount:</label>
              <input
                className={styles.input}
                type="number"
                name="amount"
                placeholder="Amount"
                required
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="price">Price:</label>
              <input
                className={styles.input}
                type="number"
                name="price"
                placeholder="Price"
                required
              />
            </div>

            <input
              className={styles.submit}
              name="send"
              type="submit"
              value="+ Add Product"
            />
          </form>

          <div className={styles.productContainer}>
            <table>
              <thead>
                <tr>
                  <th>No. Serial</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((data, index) => (
                  <tr key={index}>
                    <th>{data.serial}</th>
                    <th>{data.product}</th>
                    <th>{data.amount}</th>
                    <th>{data.price}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={saveInventory} className={styles.send}>
            <FontAwesomeIcon icon={faFloppyDisk} />
            Save Inventory
          </button>
        </div>

        <div className={styles.cardContainer}>
          {inventorys.map((data, index) => (
            <Link key={index} className={styles.card} href="">
              <FontAwesomeIcon
                className={styles.iconcard}
                icon={faBoxArchive}
              />
              <h3 className={styles.titleCard}>{`Inventory ${index}`}</h3>
              <h4 className={styles.labelCard}>Serial Number</h4>
              <p>{data[index].serial}</p>
              <h4 className={styles.labelCard}>Products</h4>
              <p>{data.length}</p>
              <h4 className={styles.labelCard}>Date:</h4>
              <p>{new Date().toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </SectionFlex>
  );
}