import React, { useContext } from 'react'
import { TareasContext } from '../../context/tareas/TareasContext'

const Tarea = ({ tarea }) => {
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea,guardarTareaActual ,tareaActual} = useContext(TareasContext)

  const handleEliminar = (id) => {
    eliminarTarea(id)
    obtenerTareas(tarea.proyectoId)
  }

  const handleClick = (tarea) => {
    tarea.estado = !tarea.estado
    cambiarEstadoTarea(tarea)
  }
  const seleccionarTarea = (tarea) =>{
    guardarTareaActual(tarea)
  }

  return (
    <li className="tarea sombra" >
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado
          ?
          (<button
            type="button"
            className="completo"
            onClick={() => handleClick(tarea)}
          >
            Completo
          </button>)
          :
          (<button
            type="button"
            className="incompleto"
            onClick={() => handleClick(tarea)}
          >
            Incompleto
          </button>)

        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={()=>seleccionarTarea(tarea)}
        >Editar</button>
        <button
          type="button"
          className="btn btn-secuendario"
          onClick={() => handleEliminar(tarea.tareaId)}
        >Eliminar</button>
      </div>
    </li>
  );
}

export default Tarea;