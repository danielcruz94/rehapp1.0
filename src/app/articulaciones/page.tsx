import styles from "./articulaciones.module.css";
import Link from "next/link";
import Image from "next/image"; // Es buena práctica usar el componente Image de Next.js
import { data } from "../../../data";

export default function Articulaciones() {
  return (
    <div className="container">
      <header className={styles.selectionHeader}>
        <div className={styles.headerInfo}>
          <Image 
            src="/Group 1.svg"
            alt="Rehapp Logo"
            className={styles.headerLogo}
            width={500}
            height={200}
          />
          <div className={styles.headerName}>
            <h1>¡Bienvenido/a!</h1>
            <span className={styles.subtitle}>
              de vuelta a tu mejor versión
            </span>
          </div>
        </div>
      </header>

      <main className={styles.selectionPage}>
        <h2>¿Qué tipo de dolencia tienes?</h2>

        <ul className={styles.painOptionsList}>
          {data.map((option) => (
            <li key={option.name} className={styles.painOptionItem}>
              <Link
                href={`/articulaciones/${String(option.name)}`}
                className={styles.optionCard}
              >
                <div className={styles.optionContent}>
                  <Image
                    src={option.icon}
                    alt="icono del dolor"
                    className={styles.optionIcon}

                    width={500}
                    height={200}
                  />
                  <span
                    className={`${styles.articulacion} ${
                      option.name.length > 8 ? styles.longText : ""
                    }`}
                  >
                    {option.name}
                  </span>
                </div>
                <div className={styles.optionArrow}>
                  <svg
                    className={styles.iconoFlechaDerecha}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>Flecha Derecha</title>
                    <circle className={styles.linea} cx="12" cy="12" r="11" />
                    <path
                      className={styles.linea}
                      d="M10 8 L 14 12 L 10 16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
              <p className={styles.optionDescription}>{option.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
