import SectionFlex from "@/src/components/SectionFlex";
import styles from "../../src/styles/pageStyles/Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import modules from "../../src/data/MainCards";
import Link from "next/link";


export default function MainPage() {
  return (
    <SectionFlex bg="#2a2a2a">
      <div className={styles.container}>
        {modules.map((data, index) => (
          <Link href={data.route} key={index} className={styles.card}>
            <FontAwesomeIcon icon={data.icon} style={{"fontSize": "50px"}}/>
            <h3>{data.title}</h3>
            <p style={{"textAlign": "center"}}>{data.description}</p>
          </Link>
        ))}
      </div>
    </SectionFlex>
  )
}