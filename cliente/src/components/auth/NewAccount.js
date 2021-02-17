import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {
  // state para iniciar session
  const [usuario, setUsuario] = useState({
    nombre:'',
    email: '',
    password: '',
    confirmar:''
  })

  const onChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value

    })
  }
  const onSubmit = (e) => { 
    e.preventDefault()

    // Validar que no haya errores / campos vacios

    // password minimo 6 caracteres

    // comprobar si los passwords son iguales 

    //Pasarlo al action
  }

  const {nombre, email, password, confirmar} = usuario
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Tu nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Tu email"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Tu password"
                onChange={onChange}
              />
            </div>
            <div className="campo-form">
              <label htmlFor="confirmar">Repetir Password</label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                value={confirmar}
                placeholder="Repite tu password"
                onChange={onChange}
              />
            </div>

            <div className="campo-f">
              <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
            </div>
        </form>
          <Link to="/" className="enlace-cuenta">Ya tengo Cuenta</Link>
      </div>
      </div>
  )
}

export default NewAccount
