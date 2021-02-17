import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  ERROR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from "../../types";

const TareasReducer = (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return { ...state, tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload) }
    case AGREGAR_TAREA:
      return { ...state, tareas: [...state.tareas, action.payload], errorTareaForm: false }
    case ERROR_TAREA:
      return { ...state, errorTareaForm: true }
    case ELIMINAR_TAREA:
      return { ...state, tareas: state.tareas.filter(tarea => tarea.tareaId !== action.payload) }
    case ACTUALIZAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map(tarea => tarea.tareaId === action.payload.tareaId ?
          action.payload
          :
          tarea
        ),
        tareaActual:null
      }
    case TAREA_ACTUAL:
      return { ...state, tareaActual: action.payload }
    default:
      return state
  }
}

export default TareasReducer;