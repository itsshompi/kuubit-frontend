import React, { Component } from 'react';
import Footer from '../Footer';
import kuubit_icon from '../../images/kuubit-icon.png';


export default class Auth extends Component {
  render() {
    return (
        <div className="text-center" >
          <div className="container animated fadeIn">
            <div className="pt-50">
              <img src={kuubit_icon} alt="" width="50px" />
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}
