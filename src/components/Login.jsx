import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./styles/login.css";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-login">
          <div className="container">
            <div className="brand mt-5">
              <div className="row">
                <div className="col-lg-2 d-none d-lg-block "></div>
                <div className="col-lg-8 col-sm-12 col-xs-12 ">
                  <div className="register Login text-center"></div>
                  <div className="text-center">
                    <img className="img-login " src={logo} alt="logo" />
                    <form className="mt-5 ml-5 mr-5 pb-3">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control mb-3 text-center input-hover"
                        placeholder="Correo electrónico o número de teléfono"
                        required
                      />
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control mb-3 text-center input-hover"
                        placeholder="Contraseña"
                        required
                      />
                      <br />
                      <Link to="/home" style={{ textDecoration: "none" }}>
                        <button
                          className="btn btn-login btn-lg  btn-block text-login rounded-pill"
                          type="submit"
                        >
                          Ingresar
                        </button>
                      </Link>
                      <br />
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <button className="btn btn-lg btn-login btn-block rounded-pill">
                          <i className="fab fa-google"></i> Sign in with Google
                        </button>
                      </Link>
                      <br />
                      <Link to="/reset" className="link-form text-login">
                        Olvidé mi contraseña
                      </Link>
                      <br />
                      <Link to="/account" className="link-form text-login">
                        Crear una cuenta
                      </Link>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
