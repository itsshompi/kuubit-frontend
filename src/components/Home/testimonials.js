import React from "react";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className="testimonials">
        <div className="container">
          <div className="row header">
            <div className="col-md-12">
              <h3>Con la confianza de muchas personas de todo el mundo</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="testimonial">
                  <h3><strong>"</strong>This thing is one of those tools that everybody should be using. I really like it and with this
                  ease to use, you can kickstart your projects and apps and just focus on your business!<strong>"</strong></h3>
                <div className="author">
                  <img src="http://lit-coast-9918.herokuapp.com/v1.3/images/testimonials/testimonial2.jpg" className="pic" alt="testimonial2" />
                  Karen Jones - Pixar Co.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
