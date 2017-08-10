import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BUCKET } from '../config/config';
import logo_alpha from '../images/logo-alpha.png';

class Header extends Component {
  render() {
    return (
      <header id="header" className="app-header navbar" role="menu">
        <div className="navbar-header bg-light visible-xs">
          <button className="pull-right visible-xs dk" ui-toggle="show" target=".navbar-collapse">
            <i className="glyphicon glyphicon-collapse-down"></i>
          </button>
          <a href="#" className="navbar-brand text-lt">
            <img src={logo_alpha} />
          </a>
        </div>
        <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only ml-0">
          <div className="container">
            <div className="nav navbar-nav hidden-xs">
              <a href="#" className="btn no-shadow navbar-btn">
                <img className="ml-3" src={logo_alpha} alt="" width="100px"/>
              </a>
            </div>
            <div>
              <ul className="nav navbar-nav hidden-sm">
                <li>
                  <a href="#">Sobre Nosotros</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                    <i className="fa fa-fw fa-plus visible-xs-inline-block"></i>
                      <span>Español</span> <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a>Español</a>
                    </li>
                    <li>
                      <a>Ingles</a>
                    </li>
                    <li>
                      <a>Portugues</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" key={9}>
                  <a className="nav-link" href="#">Iniciar Sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    );
  }
}


export default Header;