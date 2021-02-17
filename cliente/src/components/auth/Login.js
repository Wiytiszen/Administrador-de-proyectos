import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  // state para iniciar session
   const [usuario, setUsuario] = useState({
     email:'',
     password:''
   })

  const onChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value

      // validar que no haya errores
    })
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"

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
              placeholder="Tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-f">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
          </div>
        </form>
        <Link to="new-account" className="enlace-cuenta">Obtener Cuenta</Link>
      </div>
    </div>
  )
}

export default Login
