

import Link from "next/link";
import Image from 'next/image';
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      
      <Link href="/articulaciones" className={styles.imageLink}>

        <div className={styles.imageWrapper}> 
          <Image 
            src="/Logos/imagen1.png"
            alt="Rehapp" 
            fill
            sizes="(max-width: 768px) 90vw, 800px"
            priority
          />

          <div className={styles.contenedorTexto}>
            <h2 className={styles.slogan}>De vuelta a tu mejor versión</h2>
            <button className={styles.buttongreen}>Fisioterapia</button>
          </div>
       
        </div>
      </Link>
   
    </div>
  );
}