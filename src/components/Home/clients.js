import React from 'react';
//Images
import uct from '../../images/university/uct-2.png';
import ufro from '../../images/university/ufro-2.png';
import ua from '../../images/university/ua-2.png';
import umayor from '../../images/university/umayor-2.png';
import inacap from '../../images/university/inacap-2.png';

export default class Clients extends React.Component {
  render() {
    return (
      <div className="clients">
        <div className="container">
          <div className="row header">
            <div className="col-md-12">
              <h3 className="uppercase">Estamos presentes en distintas Universidades</h3>
              <div className="col-sm-4 col-sm-offset-4"><hr/></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="logos text-center">
                <img src={uct} height="48px" alt="Universidad Catolica de Temuco"/>
                <img src={ufro} height="48px" alt="Universidad de la Frontera"/>
                <img src={ua} height="48px" alt="Universidad Autonoma"/>
                <img src={umayor} height="48px" alt="Universidad Mayor"/>
                <img src={inacap} height="48px" alt="Inacap"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
