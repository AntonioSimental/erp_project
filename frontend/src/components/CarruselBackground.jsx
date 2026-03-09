import styles from "../styles/componentStyles/CarruselBackground.module.css";

export default function Carrusel() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <img src="/assets/fondo1.jpg" alt="fondo1" className={styles.img} />
        <img src="/assets/fondo2.jpg" alt="fondo2" className={styles.img} />
        <img src="/assets/fondo3.jpg" alt="fondo3" className={styles.img} />
        <img src="/assets/fondo1.jpg" alt="fondo1" className={styles.img} />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
