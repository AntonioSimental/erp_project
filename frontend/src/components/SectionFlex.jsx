import styles from "../styles/componentStyles/SectionFlex.module.css";

export default function SectionFlex({ bg, id, children, height }) {
  return (
    <div id={id} style={{ "--bg": bg, "--height": height }} className={styles.container}>
      {children}
    </div>
  );
}
