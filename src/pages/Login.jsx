import React, { Component } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";
import "../components/styles/login.css";

import userAuth from '../services/userAuth.service'

class Form extends Component {
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
            <div className="brand mt-2">
              <div className="row">
                <div className="col-lg-2 d-none d-lg-block "></div>
                <div className="col-lg-8 col-sm-12 col-xs-12 ">
                  <div className="register Login text-center"></div>
                  <div className="text-center">
                    <img className="img-login " src={logo} alt="logo" />
                    <form className="mt-4 ml-5 mr-5 pb-3">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control input-text  mb-3 text-center input-hover"
                        placeholder="Correo Electrónico"
                        required
                      />
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control input-text  mb-3 text-center input-hover"
                        placeholder="Contraseña"
                        required
                      />
                      <br />
                      <Link to="/home" style={{ textDecoration: "none" }}>
                        <button onClick={userAuth.setAuth()}
                          className="btn btn-login btn-lg  btn-block text-login rounded-pill"
                          type="submit">
                          Ingresar
                        </button>
                      </Link>
                      <br />
                      <Link to="/home" style={{ textDecoration: "none" }}>
                        <button className="btn btn-lg btn-login btn-block rounded-pill">
                          <i className="fab fa-google"></i> Sign in with Google
                        </button>
                      </Link>
                      <br />
                      <Link
                        to="/resetPassword"
                        className="link-form text-login"
                      >
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
