import React, { Component } from 'react';
import { BUCKET } from '../../../config/config';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class PanelUser extends Component {

  render() {
    const user = this.props.user;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="clearfix text-center m-t">
            <div className="inline">
                <div className="thumb-lg">
                  <img src={user.avatar.small} className="img-rounded" alt="..."/>
                </div>
              <div className="h4 m-t m-b-xs">Felipe Schneeberger</div>
              <small className="text-muted m-b">Director ejecutivo &amp; Fundador <br/> <a href="#" className="text-muted">Kuubit Inc</a></small>
            </div>
          </div>
        </div>
        <footer className="panel-footer text-center no-padder">
          <div className="row no-gutter">
            <div className="col-xs-4">
              <div className="wrapper" >
                <span className="h3 block" >245</span>
                <small className="text-muted">Followers</small>
              </div>
            </div>
            <div className="col-xs-4 dk">
              <div className="wrapper" >
                <span className="h3 block" >55</span>
                <small className="text-muted">Following</small>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="wrapper" >
                <span className="h3 block" >2,035</span>
                <small className="text-muted">Tweets</small>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.auth.user
  };
}

export default connect(mapStateToProps)(PanelUser);
