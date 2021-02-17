import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {

  const { proyectos, obtenerProyectos, proyecto } = useContext(ProyectoContext)

  useEffect(() => {
    obtenerProyectos()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ul className="listado-proyectos">
        {
          proyectos.map((p, i) => <Proyecto key={i} proyecto={p} />)
        }
      </ul>
    </>

  );
}

export default ListadoProyectos;