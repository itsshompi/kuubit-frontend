import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Testimonials from './testimonials';
import Clients from './clients';
import Footer from '../Footer';
//import Join from './join';
//Images
import home_01 from '../../images/home-01.png';

class Home extends Component {
  componentDidMount() {
    document.title = "Kuubit - Home";
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="home">
          <div className="container">
            <div className="text-center">
              <h1 className="text-uppercase">Crea y comparte información</h1>
              <h5 >Una plataforma social para crear y compartir información, orientada a univerisades</h5>
              <a className="btn btn-lg btn-primary text-uppercase btn-home"><strong>Solicita una Invitación</strong></a>
              <h5>Si ya cuentas con una invitación, <Link to="/join">ingresa aquí</Link></h5>
              <img src={home_01} alt="" className="img-responsive pt-50"/>
              <hr/>
            </div>
          </div>
        </div>
        <Clients/>
        <Footer/>
      </div>
    );
  }
}


export default Home;
