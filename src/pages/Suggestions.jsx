import React from "react";
import CallToAction from "../components/CallToAction";

class Suggestions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-left mt-3">
          <li className="fas fa-chevron-left fa-2x color-orange"></li>
          <a href="/" className="align-top mx-3 text-dark">
            Quejas
          </a>
        </div>
        <div className="container mb-5">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <small className="form-text text-muted">ALCALDÍA</small>
                <small className="form-text text-muted">7 min</small>
              </div>
              <h5 className="card-title">Ampliar ciclo ruta</h5>
              <p className="card-text">
                Vivo en el norte de la ciudad y me movilizo hacía el sur todos
                los días, y quisiera hacerlo en bicicleta pero las ciclo rutas
                no cruzan toda la ciudad, sería excelente si implementaran más.
                <span className="text-info"> #masciclorutas</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div>
                  <a href="/" className="btn color-orange border">
                    Comentar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <small className="form-text text-muted">
                  ALCALDÍA/TRÁNSITO
                </small>
                <small className="form-text text-muted">10 min</small>
              </div>
              <h5 className="card-title">Aumentar la cantidad de buses</h5>
              <p className="card-text">
                Me gustaría que implementaran mas buses de caldas hacía
                medellín, ya que diario nos toca esperar hasta 50 minutos que
                pase un bus y si pasa lleno, no para, entonces es otra media
                hora más.
                <span className="text-info"> #caldas #masbuses</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div>
                  <a href="/" className="btn color-orange border">
                    Comentar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <small class="form-text text-muted">ALCALDÍA/TRÁNSITO </small>
                <small class="form-text text-muted">27 min</small>
              </div>
              <h5 className="card-title">Aumentar pico y placa</h5>
              <p className="card-text">
                Creo que deberían extender el pico y placa ambiental por
                siempre, aplicado incluso a motos 4 tiempos, esto disminuira la
                cantidad de vehiculos circulando en los mismos horarios y
                mermarian los tacos.
                <span className="text-info">
                  {" "}
                  #picoyplacaambiental #maspicoyplaca #menostrancon
                </span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div>
                  <a href="/" className="btn color-orange border">
                    Comentar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </React.Fragment>
    );
  }
}

export default Suggestions;
