import React from "react";

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
                  Otro
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
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing9"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing9"
                >
                  Plataformas
                </label>
              </div>
              <input
                className="form-control text-center"
                type="text"
                placeholder="¿Cuál?"
              />
            </div>
          </div>
          <hr />
          <div className="row">
              <p>
              Uso el transporte para dirigirme a mi sitio de trabajo/estudio
              </p>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing10"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing10"
                >
                  
                </label>
              </div>
              
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Move;
