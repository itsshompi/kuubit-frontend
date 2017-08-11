import React from 'react';
import { Component } from 'react';
import Header from './Header';
import '../base.css';

export default class App extends Component {
  render() {
    return (
      <div className="app app-header-fixed">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
