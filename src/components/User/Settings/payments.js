import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SettingsPayments extends React.Component {

  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Pagos</h3>
          </div>
          <div className="panel-body">
            <div className="col-sm-12">
              <h4>Balance</h4>
              <p>
                Puedes añadir dinero a tu cuenta de Kuubit, mediante transferencias bancarias o metodos destinados para cada pais.
              </p>
              <div className="col-sm-4 text-center">
                <label className="control-label h3">Monto en Kuubit</label>
                <label className="control-label h1"><i className="fa fa-usd text-success"></i>16.00 <small>USD</small></label>
              </div>
              <div className="col-sm-8">
                <a href="#" className="text-info"><i className="fa fa-plus"></i> Añadir Dinero a tu Cuenta de Kuubit</a>
                <p className="text-muted">
                  <small>Si usted posee dinero en su cuenta de Kuubit y tiene agregado un metodo de pago, primero se tomara en cuenta el dinero en Kuubit y en segunda instancia los metodos de pagos añadidos.</small>
                </p>
              </div>
            </div>
            <div className="col-sm-12 pt-50">
              <h4>Metodos de Pagosssss</h4>
              <hr/>
              <div className="row">
                <div className="form-group">
                  <div className="col-sm-2 ">
                    <label className="control-label">Tipo de Cuenta</label>
                  </div>
                  <div className="col-sm-6 ">
                    <label className="control-label"><i className="fa fa-user"></i> Basic Plan</label>
                  </div>
                  <div className="col-sm-4">
                    <a href="#" className="btn btn-default">Cambiar Tipo de Cuenta</a>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="row">
                <div className="form-group">
                  <div className="col-sm-2 ">
                    <label className="control-label">Metodo de Pago</label>
                  </div>
                  <div className="col-sm-6 ">
                    <label className="control-label"><i className="fa fa-warning text-warning"></i> No se a añadido un metodo de pago</label>
                  </div>
                  <div className="col-sm-4">
                    <a href="#" className="btn btn-default">Añadir Metodo de Pago</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <hr/>
              <h4>Historial de Pagos</h4>
              <table className="table table-striped m-b-none">
                <thead>
                  <tr>
                    <th></th>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Descripción</th>
                    <th>Metodo de Pago</th>
                    <th>Recibo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><i className="fa fa-check text-success"></i></td>
                    <td>#81231</td>
                    <td>30/05/2015</td>
                    <td>$10.00</td>
                    <td>Basic Plan</td>
                    <td>Paypal</td>
                    <td> <a href="#" className="text-danger"> <i className="fa fa-download"></i></a></td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-check text-success"></i></td>
                    <td>#81012</td>
                    <td>30/04/2015</td>
                    <td>$10.00</td>
                    <td>Basic Plan</td>
                    <td>Paypal</td>
                    <td> <a href="#" className="text-danger"> <i className="fa fa-download"></i></a></td>
                  </tr>
                </tbody>
              </table>
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

export default connect(mapStateToProps)(SettingsPayments);
