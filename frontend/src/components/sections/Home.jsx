import SectionFlex from "../SectionFlex";
import styles from "../../styles/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <SectionFlex id="Home">
      <h1>Gestor Empresarial Multifuncional Avanzado</h1>
      <h3>"The shines in every area"</h3>
      <p style={{"textAlign": "center"}}>The best option if you search easy customization and accesiblity</p>
      <a className={styles.button} href="#About">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </SectionFlex>
  );
}
