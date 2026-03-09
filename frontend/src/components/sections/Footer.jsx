import styles from "../../styles/sectionStyles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter, faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faGlobe, faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <h3 className={styles.footertitle}>Social</h3>
        <ul className={styles.footerlist}>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faInstagram}/> Instagram
          </li>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faFacebook}/> Facebook
          </li>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faXTwitter}/> Twitter
          </li>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faSnapchat}/> Snapchat
          </li>
        </ul>
      </div>
      <div className={styles.footercontainer}>
        <h3 className={styles.footertitle}>Contact</h3>
        <ul className={styles.footerlist}>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faEnvelope}/> gema@gmail.com
          </li>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faPhone}/> +55 674 233 2439
          </li>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faGlobe}/> In his house # 230
          </li>
        </ul>
      </div>
      <div className={styles.footercontainer}>
        <h3 className={styles.footertitle}>Copyright</h3>
        <ul className={styles.footerlist}>
          <li className={styles.footeritem}>
            <FontAwesomeIcon icon={faCopyright}/> GEMA project 2025
          </li>
        </ul>
      </div>
      <div className={`${styles.footercontainer} ${styles.footercontainerextends}`}>
        <h3 className={styles.footertitle}>GEMA</h3>
        <img className={styles.footerlogo} src="/assets/logoGema.png" alt="Logo Gema" />
      </div>
    </footer>
  );
}