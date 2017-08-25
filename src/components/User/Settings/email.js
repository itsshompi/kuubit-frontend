import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SettingsEmail extends React.Component {

  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Email</h3>
          </div>
          <div className="panel-body">
            <div className="col-sm-12">
              <h4>Correos Electronicos</h4>
              <table className="table table-striped m-b-none">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>itsshompi@gmail.com</td>
                    <td>Primario</td>
                    <td>Publico</td>
                    <td> <a href="#" className="text-danger"> <i className="icon icon-trash"></i> Eliminiar </a></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-12">
              <hr/>
              <h4>Añadir Email</h4>
              <p>
                Puedes añadir mas de una dirección de correo electronico en Kuubit, pero debes mantener una dirección primaria, para que puedas acceder
                a nuestra plataforma. <br/>
                Puedes configurar tus direcciones de email en la parte de abajo, para no recibir correos no deseados.
              </p>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Dirección de Email</label>
                  <input type="email" className="form-control" placeholder="Ingresa tu dirección de Email"/>
                </div>
                <a href="#" className="btn btn-default">Añadir Email</a>
              </div>
            </div>
            <div className="col-sm-12">
              <hr/>
              <h4>Preferencias de Email</h4>
                <div className="col-sm-10">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value=""/>
                      Option one is this and that—be sure to include why it's great
                    </label>
                  </div>

                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
                      Option one is this and that—be sure to include why it's great
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                      Option two can be something else and selecting it will deselect option one
                    </label>
                  </div>
                </div>
                <a href="#" className="btn btn-default">Cambiar Preferencias</a>
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

export default connect(mapStateToProps)(SettingsEmail);
