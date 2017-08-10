import React, { Component } from 'react';
import { BUCKET } from '../../../config/config';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Feed extends Component {

  render() {
    return (
      <div className="col-md-8">
        <div className="padder-md">
          <div className="m-b text-md text-center">Actividad Reciente</div>
          <div className="streamline b-l m-b">
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">5 minutes ago</div>
                <p><a href="" className="text-info">Jessi</a> commented your post.</p>
              </div>
            </div>
            <div>
              <a className="pull-left thumb-sm m-l-n-md">
                <img src="http://flatfull.com/themes/angulr/html/img/a6.jpg" className="r r-2x" alt="..."/>
              </a>
              <div className="m-l-lg m-b-lg">
                <div className="m-b-xs">
                  <a href="" className="h4">Felipe Schneeberger <small>@Itsshompi</small></a>
                  <span className="text-muted m-l-sm pull-right">
                    3h ago
                  </span>
                </div>
                <div className="m-b">
                  <div className="m-b">Cecteter adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. ullamcorper sodales nisi nec adipiscing elit. Morbi id neque quam. Aliquam sollicitudin </div>
                  <img src="http://flatfull.com/themes/angulr/html/img/c5.jpg" className="b b-a wrapper-xs bg-white img-responsive"/>
                  <div className="m-t-sm">
                    <a href="" className="text-muted m-xs"><i className="icon-action-redo"></i></a>
                    <a href="" className="text-muted m-xs"><i className="icon-star"></i></a>
                    <a href="" className="text-muted m-xs"><i className="icon-refresh"></i> 13</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">11:30</div>
                <p><a className="text-info">Roberto Perez</a> a comenzado un nuevo Proyecto :)</p>
                <p>  <img src="https://pbs.twimg.com/media/CLwfdWvWEAEY19J.jpg" class="img-responsive img-rounded" /></p>
              </div>
            </div>
            <div className="sl-item b-success b-l">
              <div className="m-l">
                <div className="text-muted">10:30</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<a href="" className="text-info">Jacob</a> and discuss the detail.</p>
              </div>
            </div>
            <div className="bg-info wrapper-sm m-l-n m-r-n m-b r r-2x">
              Create tasks for the team
            </div>
            <div className="sl-item b-primary b-l">
              <div className="m-l">
                <div className="text-muted">Wed, 25 Mar</div>
                <p>Finished task <a href="" className="text-info">Testing</a>.</p>
              </div>
            </div>
            <div className="sl-item b-warning b-l">
              <div className="m-l">
                <div className="text-muted">Thu, 10 Mar</div>
                <p>Trip to the moon</p>
              </div>
            </div>
            <div className="sl-item b-info b-l">
              <div className="m-l">
                <div className="text-muted">Sat, 5 Mar</div>
                <p>Prepare for presentation</p>
              </div>
            </div>
            <div className="sl-item b-l">
              <div className="m-l">
                <div className="text-muted">Sun, 11 Feb</div>
                <p><a href="" className="text-info">Jessi</a> assign you a task <a href="" className="text-info">Mockup Design</a>.</p>
              </div>
            </div>
            <div className="sl-item b-l">
              <div className="m-l">
                <div className="text-muted">Thu, 17 Jan</div>
                <p>Follow up to close deal</p>
              </div>
            </div>
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">5 minutes ago</div>
                <p><a href="" className="text-info">Jessi</a> commented your post.</p>
              </div>
            </div>
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">11:30</div>
                <p>Join comference</p>
              </div>
            </div>
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">5 minutes ago</div>
                <p><a href="" className="text-info">Jessi</a> commented your post.</p>
              </div>
            </div>
            <div className="sl-item">
              <div className="m-l">
                <div className="text-muted">11:30</div>
                <p>Join comference</p>
              </div>
            </div>
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

export default connect(mapStateToProps)(Feed);
