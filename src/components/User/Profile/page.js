import React from 'react';
import { Link } from 'react-router';

class UserProfile extends React.Component {
  render() {
    return (
      <div className="col">
        <div className="cover-profile">
          <div className="container-profile">
            <div className="basic-info-profile">
              <img className="img-profile inner-border" src="https://s3-sa-east-1.amazonaws.com/kuubit-files/users/images/avatar_default01.jpg" alt="..."/>
              <h1>Felipe Schneeberger <img src="https://www.tripepismith.com/wp-content/uploads/2015/06/Twitter-checkmark.png" alt="" width="16px"/></h1>
              <h2>Director Ejecutivo &amp; Fundador</h2>
              <h3>Kuubit Inc.</h3>
            </div>
          </div>
        </div>

        <div className="wrapper bg-white b-b">
          <div className="container-nav">
            <ul className="nav nav-pills nav-sm">
              <li className="active"><a href=""><i className="icon icon-home"></i> Inicio</a></li>
              <li><a href=""><i className="icon icon-feed"></i> Actividad</a></li>
              <li><a href=""><i className="icon icon-briefcase"></i> Proyectos</a></li>
              <li><a href=""><i className="icon icon-puzzle"></i> Contribuciones</a></li>
              <li><a href=""><i className="icon icon-users"></i> Grupos</a></li>
              <li className="pull-right follow"><a href="" className=""><i className="icon icon-user-follow"></i> Seguir</a></li>
              <li className="pull-right"><a href="" className=""><i className="icon icon-envelope-open"></i> Enviar Mensaje</a></li>
            </ul>
          </div>
        </div>

        <div className="container-profile mt15">


        </div>
      </div>
    )
  }
}



export default UserProfile;
