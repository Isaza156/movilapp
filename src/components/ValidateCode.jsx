import React, { Component } from "react";
import "./styles/reset.css";
import { Link } from "react-router-dom";

class ValidateCode extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-login">
          <div className="container">
            <div className="brand">
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-xs-12 ">
                  <div className="register Login text-center mt-5"></div>
                  <div className="text-center">
                    <i className="fas fa-unlock-alt fa-5x text-login m-5"></i>
                    <h2>Ingrese el código de seguridad</h2>
                    <div className="container text-justify">
                              Hemos enviado un código de seguridad a tu correo
                              electrónico. Digita
                              tu código para reestablecer tu contraseña
                            </div>
                    <form className="mt-5 ml-5 mr-5 pb-3 ">
                      <input
                        type="text"
                        id="SecutiryCode"
                        className="form-control input-text mb-1  input-hover"
                        placeholder="Codigo de seguridad* "
                        required
                      />

                      <br />
                      <div className="d-flex justify-content-end">
                        <Link to={"/resetpassword"}>
                          <button
                            className="btn btn-outline-secondary  mt-4 mb-3 mr-1"
                            type="submit"
                          >
                            No recibí mi código
                          </button>
                        </Link>
                        <Link to="/newpassword">
                          <button
                            className="btn btn-login  text-login mt-4 mb-3 "
                            type="submit"
                          >
                            Validar mi código
                          </button>
                        </Link>
                      </div>
                      <br />

                      <br />

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

export default ValidateCode;