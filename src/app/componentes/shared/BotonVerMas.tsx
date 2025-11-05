"use client";

export default function BotonVerMas({ className }: { className?: string }) {
  const handleClick = () => {
    alert("Ver más ejercicios");
  };

  return (
    <button className={className}  onClick={handleClick}>
      Ver más Ejercicios
    </button>
  );
}