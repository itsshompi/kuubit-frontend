import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-home-page">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-2 col-sm-offset-5">
              <hr/>
              <br/>
            </div>
          </div>
          <ul className="list-inline font-s-12">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Trabajo</a></li>
            <li><a href="#">Condiciones</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Redes Sociales</a></li>
            <li>&copy; 2015 - 2017 Kuubit</li>
          </ul>
          <p className="text-muted font-s-11">
            Creado con <i className="fa fa-heart"></i> en Chile
          </p>
        </div>
      </footer>
    )
  }
}
