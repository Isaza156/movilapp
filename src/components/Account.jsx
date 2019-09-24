import React, { Component } from "react";
import "./styles/FormStyle.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

class Form extends Component {
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
                    <i className="fas fa-user-circle fa-5x text-login"></i>

                    <form className="mt-5 ml-5 mr-5 pb-3">
                      <div className="input-group mb-1">
                        <input
                          type="text"
                          className="form-control input-sm mr-1  input-hover"
                          placeholder="Nombre* "
                        />
                        <span className="input-group-btn  input-hover"></span>
                        <input
                          type="text"
                          className="form-control input-sm"
                          placeholder="Apellidos* "
                        />
                      </div>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control mb-1 input-hover"
                        placeholder="Nombre de usuario* "
                        required
                      />
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control mb-1 input-hover"
                        placeholder="Correo electrónico* "
                        required
                      />
                      <input
                        type="tel"
                        id="inputPhone"
                        className="form-control mb-1 input-hover"
                        placeholder="Numero de teléfono* "
                        required
                      />
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control mb-1  input-hover"
                        placeholder="Contraseña* "
                        required
                      />
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control mb-1  input-hover"
                        placeholder="Confirmar contraseña* "
                        required
                      />
                      <input
                        type="checkbox"
                        id="checkTerms"
                        className=" mb-1  input-hover"
                        placeholder="Confirmar contraseña* "
                        required
                      />
                      <span className="link-form text-login">
                        {" "}
                        He leído y acepto los terminos y condiciones
                      </span>

                      <br />
                      <Link to={"/"}>
                        <button
                          className="btn btn-login btn-lg text-login mt-4 mb-3"
                          type="submit"
                        >
                          Crear cuenta
                        </button>
                      </Link>
                      <br />
                      <a className=" link-form mb-2 text-dark"></a>
                      <Link to={"/"} className="link-form text-login">
                        Ya tengo una cuenta. Iniciar sesión
                      </Link>
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

export default Form;
