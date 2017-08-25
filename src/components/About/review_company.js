import React from "react";

export default class ReviewCompany extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-center">¿Donde nacimos?</h3>
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <p>
              Kuubit es una empresa creada en el 2015, que tiene como proposito ser una aplicación donde se puedan crear proyectos de forma facil
              y amigable con el usuario, integrando una gran variedad de herramientas, que hacen que el desarrollo de estos proyectos tengan un mejor
              resultado, tanto en el transcurso de este como al finalizar.
            </p>
            <p>
              Kuubit es creado por Felipe Schneeberger en Temuco, Chile.
            </p>
          </div>
        </div>
        <div className="col-sm-2 col-sm-offset-5">
          <hr/>
        </div>
      </div>
    );
  }
}
