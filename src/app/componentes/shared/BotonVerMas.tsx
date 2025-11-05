"use client";

export default function BotonVerMas({ className }: { className?: string }) {
  const handleClick = () => {
    alert("Estamos actualizando tus ejercicios,esto tomará solo un momento.");
  };

  return (
    <button className={className}  onClick={handleClick}>
      Ver más Ejercicios
    </button>
  );
}