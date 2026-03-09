import styles from "../../styles/sectionStyles/Services.module.css";
import ServiceTexts from "../../data/CardsServicesTexts";
import SectionFlex from "../SectionFlex";
import Image from "next/image";

export default function Services() {
  return (
    <SectionFlex id="Services" bg="#222">
      <h2>Services</h2>
      <div className={styles.container}>
        {ServiceTexts.map((data, index) => (
          <div key={index} className={styles.card}>
            <Image
              width="290"
              height="300"
              alt="image"
              src={data.image}
              className={styles.image}
            />
            <div className={styles.text}>
              <h3>{data.title}</h3>
              <p className={styles.paragraph}>
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionFlex>
  );
}
