import styles from "../src/styles/page.module.css";
import Carrusel from "@/src/components/CarruselBackground";
import Main from "@/src/components/sections/Home";
import About from "@/src/components/sections/About";
import Services from "@/src/components/sections/Services";
import Footer from "@/src/components/sections/Footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <Carrusel />
      <Main />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
