import React from "react";
import './styles/move.css';

class Move extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h2 className="mb-5 text-center">¿Cómo me Movilizo?</h2>
          <div className="container row ml-2">
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing1"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing1"
                >
                  Caminando
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing2"
                >
                  Bicicleta
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing3"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing3"
                >
                  Metro
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing4"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing4"
                >
                  Taxi
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing5"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing5"
                >
                  Plataformas
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing6"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing6"
                >
                  Bus
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing7"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing7"
                >
                  Moto
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing8"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing8"
                >
                  Carro
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-1">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing9"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing9"
                >
                  Otro
                </label>
              </div>
              <input
                className="form-control line"
                type="text"
                placeholder="¿Cuál?"
              />
            </div>
          </div>
          <hr />
          <div className="container form-check">
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input
                type="radio"
                name="check"
                className="custom-control-input"
                id="customControlAutosizing10"
              />
              <label
                className="custom-control-label"
                htmlFor="customControlAutosizing10"
              >
                Uso el transporte anterior para dirigirme a mi sitio de
                trabajo/estudio.
              </label>
            </div>
            <div className="custom-control custom-checkbox mr-sm-2 mb-3">
              <input
                type="radio"
                name="check"
                className="custom-control-input"
                id="customControlAutosizing11"
              />
              <label
                className="custom-control-label"
                htmlFor="customControlAutosizing11"
              >
                Uso el transporte anterior como herramienta de trabajo.
              </label>
            </div>
          </div>
          <hr />
          <div className="container text-center">
            <div className="mb-5">
              <h4>Información del vehiculo (Opcional)</h4>
            </div>
            <div>
              <div className="row mb-4">
                <div className="col-6">
                  <h6>Cilindraje</h6>
                  <input
                    type="text"
                    className="form-control text-center line"
                    placeholder="125cc"
                  />
                </div>
                <div className="col-6">
                  <h6>Modelo</h6>
                  <input
                    type="text"
                    className="form-control text-center line"
                    placeholder="2019"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h6>Pasajeros promedio en el recorrido</h6>
                <input
                  type="text"
                  className="form-control text-center line"
                  placeholder="2"
                />
              </div>
            </div>
          </div>
          <div className="container text-center">
          <button type="button" className="btn btn-lg mb-5 btn-login">Iniciar</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Move;