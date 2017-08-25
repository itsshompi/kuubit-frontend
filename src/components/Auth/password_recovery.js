import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecoveryPassword extends Component {
  render() {
    return (
        <div className="animated fadeIn">
          <div className="col-sm-offset-3 col-sm-6">
            <h1>Recupera tu acceso a Kuubit</h1>
            <h4 className="text-muted">Puedes recuperar tu acceso mediante tu correo electronico</h4>
            <p><small>Te enviaremos un correo electronico para que puedas restablecer tu contraseña.</small></p>
              <div className="pt-15 text-left">
                <form>
                  <fieldset className="form-group">
                    <label>Email:</label>
                    <input ref="email" className="form-control input-lg" placeholder="Correo Electronico..." />
                    <span className="help-block m-b-none"><small>Ingresa el correo electronico con el cual creaste tu cuenta.</small></span>
                  </fieldset>
                  <br/>
                  <button action="submit" className="btn btn-primary btn-block btn-lg">Reestablecer Contraseña!</button>
                </form>
              </div>
            <div className="form-group col-md-12">
              <br/>
              <hr/>
              <p className="">
                <small>¿Recordaste tu Contraseña?, puedes ingresar en el siguiente enlace:<br/>
                <Link to="/login" className="text-info"> Iniciar Sesión </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default RecoveryPassword;
