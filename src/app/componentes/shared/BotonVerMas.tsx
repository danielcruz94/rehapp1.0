export default function BotonVerMas({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {

  const handleClick = () => {

   

    // ✅ Después ejecuta lo que envió ListaEjercicios (handleVerMas)
    if (onClick) onClick();
  };

  return (
    <button className={className} onClick={handleClick}>
      Ver más
    </button>
  );
}
