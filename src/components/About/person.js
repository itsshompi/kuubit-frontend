import React from "react";

export default class Person extends React.Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className="person-card shompi">
          <h3 className="">{this.props.name}</h3>
          <span>{this.props.position}</span>
          <img src={this.props.avatar} className="avatar"/>
        </div>
      </div>
    );
  }
}
