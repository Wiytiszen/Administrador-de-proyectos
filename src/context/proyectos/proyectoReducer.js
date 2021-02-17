import {
  FORMULARIO_PROYECTO,
  NUEVO_PROYECTO,
  PROYECTO_ACTUAL,
  VALIDAR_FORMULARIO,
  OBTENER_PROYECTO,
  ELIMINAR_PROYECTO
} from "../../types";
export const ProyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return { ...state, formulario: !state.formulario, errorFormulario: false }
    case OBTENER_PROYECTO:
      return { ...state, proyectos: action.payload }
    case VALIDAR_FORMULARIO:
      return { ...state, errorFormulario: true }
    case NUEVO_PROYECTO:
      return { ...state, proyectos: [...state.proyectos, action.payload], formulario: false, errorFormulario: false }
    case PROYECTO_ACTUAL:
      
      return {...state, proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)[0]}
    case ELIMINAR_PROYECTO:
      return {...state, proyectos: [...state.proyectos.filter(proyecto => proyecto.id !== action.payload)],proyecto :null}
    default:
      return state
  }
}