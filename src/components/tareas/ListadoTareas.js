import React, { useContext } from 'react'
import ProyectoContext from "../../context/proyectos/proyectoContext";
import { TareasContext } from '../../context/tareas/TareasContext';

import Tarea from './Tarea';

const ListadoTareas = () => {
  const { proyecto, eliminarProyecto } = useContext(ProyectoContext)
  const { tareasProyecto } = useContext(TareasContext)

  if (!proyecto) return <h2>Selecciona un proyecto </h2>


  const handleDelete = () => {
    eliminarProyecto(proyecto.id)
  }
  return (
    <>
      <h2>Proyecto : {proyecto.nombre}</h2>
      <ul className="listado-tareas">

        {
          tareasProyecto?.length === 0
            ? (<li className="tarea"><p>No hay tareas</p></li>)
            :
            tareasProyecto.map((tarea, index) =>

              <Tarea
                key={index}
                tarea={tarea}
              />
            )
        }
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={handleDelete}>Eliminar Proyecto &times;</button>
    </>);
}

export default ListadoTareas;