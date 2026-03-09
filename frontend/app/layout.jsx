import { Montserrat } from "next/font/google";
import Navbar from "@/src/components/navbar";
import "../src/styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export const metadata = {
  visualViewport: "width=device-width, initial-scale=1.0",
  title: "Gestor Empresarial",
  icons: {
    icon: "/assets/logoGema.png",
  },
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
