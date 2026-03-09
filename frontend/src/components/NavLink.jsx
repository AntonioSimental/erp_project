import styles from "../styles/componentStyles/NavLink.module.css"
import Link from "next/link"

export default function NavLink({link, color, text, display}) {
  return (
    <Link className={styles.link} style={{"--color": color, "--display": display}} href={link}>{text}</Link>
  )
}