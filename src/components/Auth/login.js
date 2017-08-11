import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-offset-3 col-md-6 text-center">
          <h1>Ingresa a tu Cuenta</h1>
          <h4 className="text-muted">Ingresa a tu cuenta y conectate con personas de distintas universidades</h4>
          <div className="pt-15">
            <form>
              <div className="form-group col-md-12">
                <input ref="email" className="form-control input-lg" placeholder="Ingresa tu email" />
              </div>
              <div className="form-group col-md-12">
                <input ref="password" type="password" className="form-control input-lg" placeholder="Ingresa tu contraseña" />
              </div>
              <div className="form-group col-md-12">

              </div>
              <div className="form-group col-md-8 col-md-offset-2">
                <button action="submit" className="btn btn-primary btn-block btn-lg">Iniciar Sesión</button>
              </div>
            </form>
          </div>
          <div className="form-group col-md-12">
            <p className=""><small>Si no tienes una cuenta, puedes crearla en el siguiente enlace: <Link to={`/join`} className="text-info">Crear Cuenta </Link>
            <br/>¿Olvidaste tu Contraseña? puedes recuperarla <Link to="/recovery" className="text-info">aquí</Link></small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
