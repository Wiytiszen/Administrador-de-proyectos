import React, { useReducer } from 'react';
import { TAREAS_PROYECTO, AGREGAR_TAREA, ERROR_TAREA, ESTADO_TAREA, ELIMINAR_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA } from '../../types';
import TareasReducer from './TareasReducer';
import { TareasContext } from './TareasContext';



const TareasState = (props) => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1, tareaId: 1 },
      { nombre: 'Elegir Colores', estado: false, proyectoId: 2, tareaId: 2 },
      { nombre: 'Elegir Hoisting', estado: true, proyectoId: 3, tareaId: 3 },
      { nombre: 'Elegir Hoisting', estado: true, proyectoId: 3, tareaId: 4 },
      { nombre: 'Elegir Hoisting', estado: true, proyectoId: 3, tareaId: 5 },
    ],
    tareasProyecto: null,
    errorTareaForm: false,
    tareaActual:null
  }
  const [state, dispatch] = useReducer(TareasReducer, initialState)

  // Obtener las tareas del proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({ type: TAREAS_PROYECTO, payload: proyectoId })
  }

  const agregarTarea = (tarea) => {
    dispatch({ type: AGREGAR_TAREA, payload: tarea })
  }
  const mostrarError = () => {
    dispatch({ type: ERROR_TAREA })
  }
  const eliminarTarea = (tareaId) => {
    dispatch({ type: ELIMINAR_TAREA, payload: tareaId })
  }

  const cambiarEstadoTarea = (tarea) => {
    dispatch({ type: ESTADO_TAREA, payload: tarea })
  }
 
  const guardarTareaActual = (tarea) => {
    dispatch({ type: TAREA_ACTUAL, payload: tarea })
  }

  const actualizarTarea = (tarea) => {
    dispatch({ type: ACTUALIZAR_TAREA, payload: tarea })
  }

  return (
    <TareasContext.Provider value={{
      tareas: state.tareas,
      tareasProyecto: state.tareasProyecto,
      errorTareaForm: state.errorTareaForm,
      tareaActual:state.tareaActual,
      obtenerTareas,
      agregarTarea,
      mostrarError,
      eliminarTarea,
      cambiarEstadoTarea,
      guardarTareaActual,
      actualizarTarea
    }}>
      {props.children}
    </TareasContext.Provider>
  );
}

export default TareasState;