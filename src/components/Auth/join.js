import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
        <div className="animated fadeIn">
          <div className="col-md-offset-1 col-md-10 text-center">
            <h1>Unete a Kuubit</h1>
            <h4 className="text-muted">Conectate con personas de distintas universidades</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="pt-15 text-left">
                  <form>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control input-lg" ref="username" placeholder="Nombre de usuario..."/>
                      <span className="help-block m-b-none"><small>Este sera su nombre de usuario en Kuubit</small></span>
                    </div>
                    <fieldset className="form-group">
                      <label>Email:</label>
                      <input type="email" className="form-control input-lg" placeholder="Correo Electronico..." ref="email"/>
                      <span className="help-block m-b-none"><small>A block of help text that breaks onto a may extend beyond one line.</small></span>
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Password:</label>
                      <input className="form-control input-lg" type="password" placeholder="Contraseña..." ref="password"/>
                    </fieldset>
                    <hr/>
                    <p>By clicking on "Create an account" below, you are agreeing to the Terms of Service and the Privacy Policy.</p>
                    <hr/>
                    <button action="submit" className="btn btn-primary btn-block btn-lg">Crear una cuenta!</button>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-md-offset-1">
                <div className="pt-50 text-left">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <ul className="list-unstyled">
                        <h4><strong>Te va a encantar Kuubit</strong></h4>
                        <hr/>
                          <li>Documentos <strong>ilimatados</strong></li>
                          <li><strong>1GB </strong> de almacenamiento</li>
                        <hr/>
                        <li>
                          <i className="fa fa-check text-success"></i> Documentos ilimatados
                        </li>
                        <li>
                          <i className="fa fa-check text-success"></i> Guarda tus Archivos (1GB)
                        </li>
                        <li>
                          <i className="fa fa-check text-success"></i> Crea proyectos con tus compañeros
                        </li>
                        <li>
                          <i className="fa fa-check text-success"></i> Unete a Grupos de tu interes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
              <br/>
              <hr/>
                <p className="">
                  <small>Si ya tienes una cuenta, puedes ingresar a ella en el siguiente enlace:<br/>
                  <Link to="/login" className="text-info"> Iniciar Sesión </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Signup;
