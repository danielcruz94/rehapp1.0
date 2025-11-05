import Link from "next/link";
import styles from "./ejercicios.module.css";
import Image from "next/image";

import ListaEjercicios from "./../../componentes/shared/ListaEjercicios";

import { data, type PainType } from "../../../../data";

interface categoriasProps {
    params: {
        categorias: string[]
    }
}

// Cambia la función a 'async'
export default async function categorias(props: categoriasProps) {
   
    const { categorias } = await props.params; 





    const categoryId = (categorias[0]); 
    
    const item: PainType | undefined = data.find((d) => d.name === categoryId);
    const showItems = item!.exercise;


    const LightningIcon = () => (
        <Image src="/iconos/Vector.svg" alt="rayoicon" className="flash"
        width={15}
        height={15} />
    );

    const getDifficultyLevel = (difficulty: string): number => {
        const lowerCaseDifficulty = difficulty.toLowerCase();
        if (lowerCaseDifficulty === 'fácil') return 1;
        if (lowerCaseDifficulty === 'medio') return 2;
        if (lowerCaseDifficulty === 'difícil'||'dificil') return 3;
        return 1;
    };
      
   
  
  
  
    if (!item) {
        return (
            <div className="pageContainer errorContainer">
                <h1>Error 404</h1>
                <p>La zona de dolor con ID {categorias} no fue encontrada.</p>
                <Link href="/">Volver al inicio</Link>
            </div>
        );
    }
  
    const backgroundStyle = {
        backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.91), rgba(0, 0, 0, 0.91)),
            url(${item.backgroundImage})
        `
    };
  
   
    const getTextSizeClass = (text: string): string => {
        if (text.length > 100) return 'textExtraSmall';
        if (text.length > 80) return 'textSmall';
        return 'text-normal';
    };
  
  




    return (
      <div className={styles.exercisePage} style={backgroundStyle}>
        <div className={styles.cardContentWrapper}>
          <header className={styles.cardHeader}>
            <div className={styles.headerTitle}>
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={50}
                height={50}
              />
              <h2>{item.name}</h2>
              <Link href={`/articulaciones`} className={styles.backHomeButton}>
                <svg
                  className={styles.iconoFlechaArriba}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="39px"
                  height="39px"
                >
                  <title>Flecha hacia arriba</title>
                  <circle className={styles.circulo} cx="12" cy="12" r="12" />
                  <path
                    className={styles.flecha}
                    d="M7 14 l5-5 5 5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </Link>
            </div>
          </header>

          <div className={styles.diagramContainer}>
            <Image
              src={item.img}
              alt={`${item.name} diagram`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles.contenedorItems}>
            
            
                
               <div className={styles.contenedorAuxiliar}>
               
                <span className={styles.title}>Tus Ejercicios</span>
                     <div className={styles.contenedorDificultad}>
                        <LightningIcon/>
                        <span style={{    color: "grey"}}>Dificultad</span>
                    </div>

                </div>
              
                <ListaEjercicios exercises={showItems} />
          
            

           
           
          </div>
        </div>
      </div>
    );
        
        
}