import React, { Component } from 'react';
import Testimonials from './testimonials';
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
              <h1 className="text-uppercase">Crea tus proyectos en Kuubit</h1>
              <h5 >Una plataforma social para crear proyectos grupales y/o individuales, orientada a Univerisades</h5>
              <a className="btn btn-lg btn-primary text-uppercase btn-home"><strong>registrate gratis</strong></a>
              <h5>Comience hoy mismo, de forma gratuita</h5>
              <img src={home_01} alt="" className="img-responsive pt-50"/>
              <hr/>
            </div>
          </div>
        </div>
        <Testimonials/>
        <Clients/>

        <Footer/>
      </div>
    );
  }
}


export default Home;
