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
            style={{ objectFit: 'contain' }} 
            sizes="(max-width: 768px) 100vw, 700px" 
            priority 
          />
        </div>
      </Link>
   
    
    </div>
  );
}
