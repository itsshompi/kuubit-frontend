import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signout extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="col-md-offset-3 col-md-6">
          <h1>Gracias por estar en Kuubit</h1>
          <h4 className="text-muted">Esperamos poder verte nuevamente...</h4>
          <div className="form-group col-md-12">
            <Link to="/" className="text-info">¿Volver al Inicio?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signout;
