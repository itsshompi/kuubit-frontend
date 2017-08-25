import React from 'react';
import { Link } from 'react-router-dom';

class Settings extends React.Component {

  render() {
    return (
      <div className="col animated fadeIn">
        <div className="bg-light lter b-b wrapper-md">
          <div className="row">
            <div className="col-sm-12 col-xs-12 text-center">
              <h1 className="m-n font-thin h4 text-black">Opciones</h1>
              <small className="text-muted">Configure su cuenta.</small>
            </div>
          </div>
        </div>
        <div className="wrapper-md">
          <div className="container">
            <div className="col-md-3">
            <div className="connected">
            <div className="panel panel-default">
              <div className="panel-heading">
                Opciones
              </div>
              <div className="list-group bg-white">
                <Link to="/settings/profile" className="list-group-item" activeClassName="active">
                  <i className="fa fa-fw fa-user"></i> Perfil
                </Link>
                <Link to="/settings/account" className="list-group-item" activeClassName="active">
                  <i className="fa fa-fw fa-cog"></i> Cuenta
                </Link>
                <Link to="/settings/email" className="list-group-item" activeClassName="active">
                  <i className="fa fa-fw fa-envelope"></i> Email
                </Link>
                <Link to="/settings/payments" className="list-group-item" activeClassName="active">
                  <i className="fa fa-fw fa-usd"></i> Pagos
                </Link>
                <Link to="/settings/notifications" className="list-group-item" activeClassName="active">
                  <i className="fa fa-fw fa-bell"></i> Notificaciones
                </Link>
              </div>
            </div>
            </div>
            </div>
            <div className="col-md-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings;
