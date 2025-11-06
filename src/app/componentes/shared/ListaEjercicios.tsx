"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BotonVerMas from "./BotonVerMas";
import styles from "./ListaEjercicios.module.css";
import Toast from "./Toast";




import { data, type PainType } from "../../../../data";

export default function ListaEjercicios({
    exercises,
  }: {
    exercises: PainType["exercise"];
  }) {
    const SLICE_SIZE = 4;

    const [sliceIndex, setSliceIndex] = useState<number>(0);
    const [toastVisible, setToastVisible] = useState(false);



    useEffect(() => {
        const savedIndex = sessionStorage.getItem("exerciseSliceIndex");
        if (savedIndex) setSliceIndex(Number(savedIndex));
    }, []);

   
    
    useEffect(() => {
        sessionStorage.setItem("exerciseSliceIndex", String(sliceIndex));
    }, [sliceIndex]);

    const visibleItems = exercises.slice(sliceIndex, sliceIndex + SLICE_SIZE);


    const handleVerMas = () => {
        setSliceIndex((prev) => prev + SLICE_SIZE);
    };
    const handleVerMasClick = () => {
        // 1. mostrar toast
        setToastVisible(true);
      
        // 2. esperar 1.8 segundos
        setTimeout(() => {
          // ocultar toast
          setToastVisible(false);
      
          // 3. aumentar slice
          setSliceIndex((prev) => prev + SLICE_SIZE);
        }, 1800);
      };
      
        const canShowMore = sliceIndex + SLICE_SIZE < exercises.length;


    const LightningIcon = () => (
        <Image
            src="/iconos/Vector.svg"
            alt="rayoicon"
            className="flash"
            width={15}
            height={15}
        />
    );

    const getDifficultyLevel = (difficulty: string): number => {
        const d = difficulty.toLowerCase();
        if (d === "fácil") return 1;
        if (d === "medio") return 2;
        if (d === "difícil" || d === "dificil") return 3;
        return 1;
    };

    const getTextSizeClass = (text: string): string => {
        if (text.length > 100) return "textExtraSmall";
        if (text.length > 80) return "textSmall";
        return "text-normal";
    };

    return (
      <>
        <ul className={styles.exerciseList}>
          {visibleItems.map(
            (exerciseItem: PainType["exercise"][0], index: number) => (
              <li key={index} className={styles.exerciseItem}>
                <Link href={exerciseItem.video}>
                  <div className={styles.exerciseContent}>
                    <div className={styles.exerciseInfo}>
                      <span
                        className={`${styles.exerciseName} ${
                          styles[getTextSizeClass(exerciseItem.name)]
                        }`}
                        title={exerciseItem.name}
                      >
                        {exerciseItem.name}
                      </span>
                    </div>

                    <div className={styles.intensityLevel}>
                      {Array.from({
                        length: getDifficultyLevel(exerciseItem.difficulty),
                      }).map((_, i) => (
                        <LightningIcon key={i} />
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>

        {canShowMore && (
          <BotonVerMas
            className={styles.botonVerMas}
            onClick={handleVerMasClick}
          />
        )}

        <Toast
          message="Estamos actualizando tus ejercicios..."
          visible={toastVisible}
        />
      </>
    );
}
