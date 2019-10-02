import React, { Component } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import "../components/styles/reset.css";

class Password extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-login wow fadeIn">
          <div className="container ">
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-xs-12 m-auto">
                  <div className="register Login text-center mt-5"></div>
                  <div className="text-center">
                    <i className="fas fa-unlock-alt fa-5x text-login m-5"></i>
                    <div className="p-2">
                      <h2>Olvidé mi contraseña</h2>
                      <p className="text-justify">
                        Podemos ayudarte a restablecer tu contraseña y la
                        información de seguridad. Primero escribe tu correo
                        electrónico.
                      </p>
                    </div>

                    <form className="m-2 ">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control input-text  input-hover"
                        placeholder="Correo electrónico* "
                        required
                      />

                      <br />
                      <div className="d-flex justify-content-end">
                        <Link to="/login">
                          <button className="btn btn-outline-secondary  mt-4 mb-3 mr-1">
                            Cancelar
                          </button>
                        </Link>
                        <Link to="/validatecode">
                          <button
                            className="btn btn-login  text-login mt-4 mb-3 "
                            type="submit"
                            data-toggle="modal"
                            data-target="#ResetPassword"
                          >
                            Siguiente
                          </button>
                        </Link>
                      </div>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Password;
