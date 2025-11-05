"use client";

export default function BotonVerMas({ className }: { className?: string }) {
  const handleClick = () => {
    alert("Ver más ejercicios");
  };

  return (
    <button className={className} style={{color: "grey",backgroundColor: "rgb(107, 107, 107)"}} onClick={handleClick}>
      Ver más Ejercicios
    </button>
  );
}