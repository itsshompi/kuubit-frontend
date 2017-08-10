import React, { Component } from 'react';
import { BUCKET } from '../../../config/config';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Feed from './feed';
import PanelUser from './panel_user';
import PanelFollow from './panel_follow';


class HomeAuth extends Component {

  render() {
    return (
      <div className="col animated fadeIn">
        <div className="bg-light lter b-b wrapper-md">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <h1 className="m-n font-thin h3 text-black">Inicio</h1>
                <small className="text-muted">Bienvenido a Kuubit</small>
              </div>
              <div className="col-sm-6 text-right hidden-xs">
                <div className="inline m-r text-left">
                  <div className="m-b-xs text-muted">Lunes 25 de Abril 2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-md container">
          <Feed/>
        <div className="col-md-4">

            <PanelUser/>

            <PanelFollow/>

          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(HomeAuth);
