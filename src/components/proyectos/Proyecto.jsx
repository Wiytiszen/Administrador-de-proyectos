import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import { TareasContext } from '../../context/tareas/TareasContext';


const Proyecto = ({ proyecto }) => {
  const {proyectoActual} = useContext(ProyectoContext)
  const {obtenerTareas} = useContext(TareasContext)

  const seleccionarProyecto = (id) =>{
    proyectoActual(id)
    obtenerTareas(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick = {()=> seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
}

export default Proyecto;