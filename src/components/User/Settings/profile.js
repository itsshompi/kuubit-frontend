import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SettingsProfile extends React.Component {

  render() {

    const user = this.props.user
  
    return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Perfil</h3>
            </div>
            <div className="panel-body">
              <h5>Imagen de Perfil</h5>
              <div className="col-sm-12">
                <div className="col-sm-2">
                {user && user.avatar.small &&
                  <img className="img-rounded" width="75px" src={user.avatar.small}/>
                }
                </div>
                <div className="col-sm-8">
                  <input type="file" className="form-control" name="name" value="" /><br/>
                  <p className="text-muted">
                    Puedes subir solo imagenes JPG y PNG.
                  </p>
                </div>
              </div>

              <div className="col-sm-9" >
                <div className="form-group">
                  <label>Nombre</label>
                  <input type="text" className="form-control" placeholder="Ingresa tu Nombre" />
                </div>
                <div className="form-group">
                  <label>URL</label>
                  <input type="text" className="form-control" placeholder="Ingresa tu Sitio Web" />
                </div>
                <div className="form-group">
                  <label>Universidad</label>
                  <input type="text" className="form-control" placeholder="Ingresa tu Universidad" />
                </div>
                <div className="form-group">
                  <label>Empleo</label>
                  <input type="text" className="form-control" placeholder="Empleo" />
                </div>
                <div className="form-group">
                  <label>Compañia</label>
                  <input type="text" className="form-control" placeholder="Compañia" />
                </div>
                <a href="#" className="btn btn-default">Actualizar Perfil</a>
              </div>
            </div>
          </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(SettingsProfile);
