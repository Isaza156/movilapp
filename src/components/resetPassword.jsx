import React, { Component } from "react";
import "./styles/FormStyle.css";
import { Link } from "react-router-dom";

class Password extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-login">
          <div className="container ">
            <div className="brand">
              <div className="row">
                <div className="col-lg-2 d-none d-lg-block "></div>
                <div className="col-lg-8 col-sm-12 col-xs-12 ">
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
                        <Link to={"/"}>
                          <button
                            className="btn btn-outline-secondary  mt-4 mb-3 mr-1"
                            type="submit"
                          >
                            Cancelar
                          </button>
                        </Link>

                        <button
                          className="btn btn-login  text-login mt-4 mb-3 "
                          type="submit"
                          data-toggle="modal"
                          data-target="#ResetPassword"
                        >
                          Siguiente
                        </button>
                      </div>

                      <div
                        class="modal fade"
                        id="ResetPassword"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="resetPaswordText"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="resetPaswordText">
                                Reestablecer contraseña
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body text-justify">
                              Hemos enviado un código de seguridad a tu correo
                              electrónico ve a Restablecer contraseña y digita
                              tu código para crear tu nueva contraseña
                            </div>
                            <div class="modal-footer">
                            <Link to={"/"}>
                              <button
                                type="button"
                                class="btn btn-login  text-login mt-4 mb-3 "
                              >
                                Restablecer contraseña
                              </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-none d-lg-block fixed-bottom "></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Password;
