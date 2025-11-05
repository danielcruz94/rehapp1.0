"use client";

import styles from "./Toast.module.css";

export default function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`${styles.toast} ${visible ? styles.show : ""}`}>
      {message}
    </div>
  );
}
