import SectionFlex from "../SectionFlex";
import Image from "next/image";
import texts from "../../data/Texts.js";
import CardTexts from "../../data/CardsAboutTexts";
import styles from "../../styles/sectionStyles/About.module.css";

export default function About() {
  return (
    <SectionFlex id="About" bg="#1a1a1a">
      <div className={styles.container}>
        <div className={styles.information}>
          <h3>What is GEMA?</h3>
          <Image
            src="/assets/about-image.jpg"
            alt="About Image"
            width="500"
            height="200"
            className={styles.image}
          />
          <p>{texts.about}</p>
        </div>
        <div className={styles.information}>
          <h3 style={{ opacity: "0" }}>Hidden</h3>
          {CardTexts.map((data, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInformation}>
                <Image
                  src={data.image}
                  alt="About Image"
                  width="100"
                  height="100"
                  className={styles.image}
                />
                <div>
                  <h3 className={styles.cardTitle}>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFlex>
  );
}