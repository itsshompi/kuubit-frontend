import React from 'react';
import { Link } from 'react-router-dom';

export default class Clients extends React.Component {
  render() {
    return (
      <div className="join">
        <div className="container">
          <div className="row header">
            <div className="col-md-12">
              <h3>Unete y empieza a crear con nuestra comunidad</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="text-center">
              <a className="btn btn-lg btn-join text-uppercase btn-home"><strong>registrate gratis</strong></a>
              <h5>Comience hoy mismo, de forma gratuita</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
