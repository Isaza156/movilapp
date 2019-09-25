import React from "react";
import CallToAction from "./CallToAction";

class Pqrs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-right mt-3">
          <a href="/" className="align-top mx-3 text-dark">
            Sugerencias
          </a>
          <li className="fas fa-chevron-right fa-2x color-orange"></li>
        </div>
        <div className="container mb-5">
          <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <small className="form-text text-muted">ALCALDÍA/TRÁNSITO</small>
                <small className="form-text text-muted">1 min</small>
                </div>
              <h5 className="card-title">Buseteros compitiendo</h5>
              <p className="card-text">
                Los buseteros de bello compiten por recoger pasajeros y están poniendo en riesgo la vida de nosotros.
                <span className="text-info">#buseteros#busesbello#bello#masrespetoconlospasajeros</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div><a href="/" className="btn color-orange border">
                Comentar
              </a></div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <small className="form-text text-muted">METRO</small>
                <small className="form-text text-muted">5 min</small>
                </div>
              <h5 className="card-title">El metro hace muchas paradas</h5>
              <p className="card-text">
                Normalmente un viaje de san antonio a la estrella demora 25 minutos, pero la mayoría de veces esta demorando mas de 40 minutos porque para antes de llegar a cada estación.
                <span className="text-info">#metromedellin#elmetroeslento#movilidadagil</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div><a href="/" className="btn color-orange border">
                Comentar
              </a></div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <small class="form-text text-muted">TRÁNSITO/VÍAS</small>
                <small class="form-text text-muted">15 min</small>
                </div>
              <h5 className="card-title">Accidentes por huecos</h5>
              <p className="card-text">
                Se ha vuelto costumbre ver accidentes en la vía robledo por huecos, muy peligrosas esas calles
                <span className="text-info">#robledo#viasconhuecos#arreglarvias#noserobeneldinero</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div><a href="/" className="btn color-orange border">
                Comentar
              </a></div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </React.Fragment>
    );
  }
}

export default Pqrs;