import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to="/about/us">Sobre nosotros</Link></li>
            <li><Link to="/about/faq">Ayuda</Link></li>
            <li><Link to="/about/jobs">Trabajo</Link></li>
            <li><Link to="/about/legal/terms">Condiciones</Link></li>
            <li><Link to="/about/legal/privacy">Privacidad</Link></li>
            <li><Link to="/about/legal/cookies">Cookies</Link></li>
            <li><Link to="/about/social">Redes Sociales</Link></li>
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
