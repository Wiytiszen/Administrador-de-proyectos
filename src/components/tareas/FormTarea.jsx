import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid'
import ProyectoContext from '../../context/proyectos/proyectoContext';
import { TareasContext } from '../../context/tareas/TareasContext';

const FormTarea = () => {
  const [tarea, setTarea] = useState({nombre:''})
  const { proyecto } = useContext(ProyectoContext)
  const { agregarTarea,obtenerTareas, mostrarError, errorTareaForm, tareaActual,actualizarTarea } = useContext(TareasContext)
  
  //Effect que detecta si hay una tarea para editar
  useEffect(()=>{
    if(tareaActual !== null){
      setTarea(tareaActual)
    }else{
      setTarea({nombre:''})
    }
  },[tareaActual])

  if (!proyecto) return null
  
  const handleOnChange = (e)=> {
    setTarea({
      ...tarea,
      nombre:e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    // validar input
    if(tarea.nombre === ''){
      mostrarError()
      return;
    }

    // revisa si es edicion o nueva tarea
    if(!tareaActual){
      tarea.proyectoId = proyecto.id
      tarea.estado = false
      tarea.tareaId = v4()
      //agregar una nueva tarea
      agregarTarea(tarea)
    }else{
      //actualizar tarea existente
      actualizarTarea(tarea)
      
    }
    
    // obtener el nuevo arreglo
    obtenerTareas(proyecto.id)
    
    //reset form
    setTarea({nombre:''})
  }
  
  return ( 
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input 
            type="text" 
            className="input-text"
            placeholder="Nombre tarea ..."
            value={tarea.nombre}
            name="nombre"
            onChange={handleOnChange}
          />
        </div>
        <div className="contenedor-input">
          <input 
            type="submit" 
            className="btn btn-primario btn-submit btn-block" 
            value={tareaActual?"Editar Tarea":"Agregar Tarea"}/>

        </div>
      </form>
      {errorTareaForm &&
        <p className="mensaje error">¡Completar el Campo!</p>
      }
    </div>
   );
}
 
export default FormTarea;