import React, { Component } from 'react';
import { BUCKET } from '../../../config/config';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class PanelFollow extends Component {

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="text-muted">Encuentra gente para seguir <br/><small><a href="#" className="text-info">Ver todos</a></small></h4>

          <a href="" className="thumb pull-right m-l m-t-xs avatar">
            <img src="https://s3-sa-east-1.amazonaws.com/kuubit-files/users/images/avatar_default02.jpg" alt="..."/>
            <i className="on md b-white bottom"></i>
          </a>
          <div className="clear">
            <a href="" className="text-info block m-b-xs">@Mike Mcalidek <i className="icon-twitter"></i></a>
            <a href="" className="btn btn-addon btn-sm btn-info m-t-xs"><i className="icon-user-follow"></i> Seguir</a>
          </div>

          <hr/>

          <a href="" className="thumb pull-right m-l m-t-xs avatar">
            <img src="https://s3-sa-east-1.amazonaws.com/kuubit-files/users/images/avatar_default03.jpg" alt="..."/>
            <i className="on md b-white bottom"></i>
          </a>
          <div className="clear">
            <a href="" className="text-info block m-b-xs">@Mike Mcalidek <i className="icon-twitter"></i></a>
            <a href="" className="btn btn-addon btn-sm btn-info m-t-xs"><i className="icon-user-follow"></i> Seguir</a>
          </div>

          <hr/>

          <a href="" className="thumb pull-right m-l m-t-xs avatar">
            <img src="https://s3-sa-east-1.amazonaws.com/kuubit-files/users/images/avatar_default04.jpg" alt="..."/>
            <i className="on md b-white bottom"></i>
          </a>
          <div className="clear">
            <a href="" className="text-info block m-b-xs">@Mike Mcalidek <i className="icon-twitter"></i></a>
            <a href="" className="btn btn-addon btn-sm btn-info m-t-xs"><i className="icon-user-follow"></i> Seguir</a>
          </div>

          <hr/>
          <a href="#" className="text-info">Encontrar amigos</a>
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

export default connect(mapStateToProps)(PanelFollow);
