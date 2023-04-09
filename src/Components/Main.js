import Inicio from "./Contenido/Inicio";
import Nosotros from "./Contenido/Nosotros";
import Servicios from "./Contenido/Servicios";
import './estilos.css'

const Main = () => {
  return (
    <main className=''>
      <Inicio />
      <Servicios />
      <Nosotros />
    </main>
  );
}

export default Main;