import React from 'react';

class SettingsAccount extends React.Component {
  render() {
    return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Cuenta</h3>
            </div>
            <div className="panel-body">
              <div className="col-sm-12">
                <h4>Cambiar Contraseña</h4>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Contraseña Actual</label>
                    <input type="password" className="form-control" placeholder="Ingresa tu Contraseña Actual"/>
                  </div>
                  <div className="form-group">
                    <label>Contraseña Nueva</label>
                    <input type="password" className="form-control" placeholder="Ingresa tu Contraseña Nueva"/>
                  </div>
                  <div className="form-group">
                    <label>Repetir Contraseña Nueva</label>
                    <input type="password" className="form-control" placeholder="Repita la Contraseña Nueva"/>
                  </div>
                  <a href="" className="btn btn-default">Cambiar Contraseña</a>
                  <a href="" className="text-info">Olvide mi Contraseña</a>
                </div>
              </div>
              <div className="col-sm-12">
                <hr/>
                <h4>Cambiar Nombre de Usuario</h4>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Nuevo Nombre de Usuario</label>
                    <input type="password" className="form-control" placeholder="Ingresa tu nuevo nombre de usuario"/>
                  </div>
                  <a href="" className="btn btn-default">Cambiar Nombre de Usuario</a>
                </div>
              </div>
              <div className="col-sm-12">
                <hr/>
                <h4>Eliminar Cuenta</h4>
                <div className="col-sm-9">
                  <a href="" className="btn btn-danger">Eliminar Cuenta</a>
                  <p className="text-muted">
                    Se eliminara la cuenta de los registros de Kuubit en un plazo de 30 días, en caso de que el usuario decida cambiar de opinión.
                  </p>
                </div>
              </div>
            </div>
          </div>
    )
  }
}



export default SettingsAccount;
