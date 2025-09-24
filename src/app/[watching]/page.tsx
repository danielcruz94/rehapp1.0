import { data, type Exercise } from "../../../data";


interface categoriasProps {
  params: {
      watching: string // ¡Cambia 'name' por 'watching' aquí!
  }
}
export default  async function Watching({ params }: categoriasProps) {

const { watching } =  await params; 

  return (
    <div className="container">
      <h1>{watching}</h1> 
    </div>
  );
}