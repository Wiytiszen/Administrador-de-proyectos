import React, { useState , useContext } from 'react'
import { v4 } from 'uuid'
import ProyectoContext  from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {

  // Obtener el context del formulario
  const {formulario, mostrarFormulario,nuevoProyecto, mostrarError, errorFormulario} = useContext(ProyectoContext)
  
  const [proyecto, setProyecto] = useState({
    nombre:'',
  })

  const onChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  const onSubmitProyecto = (e)=>{
    e.preventDefault()
    // validar el Proyecto
    if(proyecto.nombre === ''){
      mostrarError()
      return;
    }
    //agregar al state
    proyecto.id = v4()
    nuevoProyecto(proyecto)
    //Reiniciar el form
    setProyecto({
      nombre:''
    })
  }
  const mostrar = () =>{
    mostrarFormulario()
  }
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={mostrar}
        >
        Nuevo Proyecto </button>
      {formulario &&
      <form
      onSubmit={onSubmitProyecto}
      className="formulario-nuevo-proyecto"
      >
        <input type="text" name="nombre" value={proyecto.nombre} placeholder="Nombre Proyecto" className="input-text" onChange={onChange}/>
        <input type="submit" value="Crear" className="btn btn-block btn-primario"/>
      </form>
      }
      {errorFormulario &&
        <p className="mensaje error">¡Completar el Campo!</p>
      }
    </>
  );
}

export default NuevoProyecto;