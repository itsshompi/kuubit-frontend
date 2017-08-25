import React from 'react';
import Footer from '../Footer';
//Images
import kuubit_icon from '../../images/kuubit-icon.png';
export default class AboutSocialPage extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="about-kuubit">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <div className="col-sm-12">
                  <img src={kuubit_icon} alt="" width="100px" />
                </div>
                <div className="col-sm-2 col-sm-offset-5">
                  <hr/>
                </div>
                <div className="col-sm-12">
                  <div className="col-sm-6 col-sm-offset-3">
                    <h4>
                      <strong>Social: </strong> Nuetras Redes Sociales
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
