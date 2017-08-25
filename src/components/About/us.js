import React from 'react';
import Person from './person';
import ReviewCompany from './review_company';
import Footer from '../Footer';

//Images
import kuubit_icon from '../../images/kuubit-icon.png';
import avatar_01 from '../../images/company/avatar01.jpg'

export default class AboutPage extends React.Component {
  componentDidMount() {
    document.title = "Kuubit - Sobre Nosotros";
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="about-us">
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
                      <strong>Nuestra misión:</strong> ofrecer a todo el mundo la capacidad de reunir y compartir conocimientos.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="people-kuubit">
            <div className="row">
              <div className="container">
                <ReviewCompany/>
                <div className="col-sm-12">
                  <section className="people-working">
                    <div className="row">
                      <Person
                        name="Felipe Schneeberger"
                        position="CEO & Founder "
                        avatar={avatar_01}
                        class="col-md-4 col-md-offset-4"
                      />
                    </div>
                  </section>
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
