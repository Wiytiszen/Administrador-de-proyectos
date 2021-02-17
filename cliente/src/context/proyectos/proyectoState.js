import React, { useReducer } from 'react'

import ProyectoContext from './proyectoContext'
import { ProyectoReducer } from './proyectoReducer'
import { 
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  PROYECTO_ACTUAL,
  NUEVO_PROYECTO,
  VALIDAR_FORMULARIO, 
  ELIMINAR_PROYECTO} from '../../types';


const ProyectoState = props => {
  const initialState = {
    formulario: false,
    proyecto:null,
    proyectos: [],
    errorFormulario: false
  }
  const [state, dispatch] = useReducer(ProyectoReducer, initialState)

  const proyectos= [
    { id: 1, nombre: 'Chat Room' },
    { id: 2, nombre: 'Tienda Virtual' },
    { id: 3, nombre: 'Intranet' }
  ]

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }
  
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos
    })
  }
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    })
  }
  const nuevoProyecto = (nuevoProyecto) => {
    dispatch({
      type: NUEVO_PROYECTO,
      payload: nuevoProyecto
    })
  }
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
  }

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        nuevoProyecto,
        obtenerProyectos,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  )
}

export default ProyectoState