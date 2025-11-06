"use client";

import Link from "next/link";

import styles from "./BackButoon.module.css";

export default function BackButton({ className }: { className?: string }) {
  const handleClick = () => {
    sessionStorage.removeItem("exerciseSliceIndex");
  };

  return (
    <Link href="/articulaciones" className={styles.backHomeButton} onClick={handleClick}>
    <svg
      className={styles.iconoHome}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle className={styles.circulo} cx="12" cy="12" r="11" />
      <path
        className={styles.flecha}
        d="M6 12 L12 6 L18 12 V18 H6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </Link>
  
  );
}


