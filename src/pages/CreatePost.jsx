import React, { Component } from "react";
import "../components/styles/account.css";
import { Link } from "react-router-dom";

class CreatePost extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5 pt-5">
          <h2 className="mb-5 text-center">¿Quién quieres que te escuche?</h2>
          <div className="container row ml-2 ">
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
                  Area Metropolitana
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
                  Secretaria de Tránsito
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
                  Policia Nacional
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
                  Metro de Medellín
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input text-danger"
                  id="customControlAutosizing7"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing7"
                >
                  Secretaría de Ambiente
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
                  Alcaldía Medellín
                </label>
              </div>
              <input
                className="form-control line"
                type="text"
                placeholder="¿Cuál?"
              />
            </div>

            <textarea
              class="form-control border border-secondary mt-5"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Agregar comentario"
            ></textarea>
            
          </div>
          <div className="d-flex justify-content-end">
              <Link to={"/"}>
                <button
                  className="btn btn-outline-secondary  mt-4 mb-3 mr-1"
                  type="submit"
                >
                  Cancelar
                </button>
              </Link>

              <button
                className="btn btn-login  text-login mt-4 mb-3 pl-4 pr-4"
                type="submit"
              >
                Enviar
              </button>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatePost;