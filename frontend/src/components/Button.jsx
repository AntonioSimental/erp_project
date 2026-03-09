import styles from "../styles/componentStyles/Button.module.css"

export default function Buttin({action, color, text}) {
  return (
    <button className={styles.button} style={{"--color": color}} onClick={action}>{text}</button>
  )
}