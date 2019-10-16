import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import WOW from "wowjs";
import logo from "../components/images/logo.png";
import "../components/styles/login.css";
import userAuth from "../services/userAuth.service";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.state[e.target.name] = e.target.value;
  }

  async handleSubmit(e) {
    e.preventDefault();

    let response = await userAuth.setAuth(this.state);
    if (response !== true) {
      const notification = document.querySelector("#notification");
      notification.innerHTML = `${response}`;
      notification.classList.remove("d-none");
      return;
    }
    await document.querySelector("#login_to_home").click();
  }

  componentDidMount() {
    new WOW.WOW({ live: false }).init();
  }

  render() {
    return (
      <div className="container bg-login wow fadeIn">
        <div className="row mt-2">
          <div className="col-lg-8 col-sm-12 col-xs-12 mx-auto text-center">
            <img className="img-login " src={logo} alt="logo" />

            <div id="notification" className="alert alert-danger d-none"></div>

            <form className="mt-4 ml-5 mr-5 pb-3" onSubmit={this.handleSubmit}>
              <input
                className="form-control input-text  mb-3 text-center input-hover"
                type="email"
                name="email"
                id="inputEmail"
                placeholder="Correo Electrónico"
                onChange={this.handleInput}
                required
              />

              <input
                className="form-control input-text  mb-3 text-center input-hover"
                type="password"
                name="password"
                id="inputPassword"
                placeholder="Contraseña"
                onChange={this.handleInput}
                required
              />

              <br />
              <Link id="pasar" className="d-hidden" to="/home"></Link>
              <button
                type="submit"
                className="btn btn-login btn-lg btn-block text-login rounded-pill"
              >
                Ingresar
              </button>

              <br />


              {/* <button className="btn btn-lg btn-login btn-block rounded-pill">
                  <i className="fab fa-google"></i> Sign in with Google
                </button> */}
            </form>


            <Link to="/account" style={{ textDecoration: "none" }}>
              <button className="btn btn-lg btn-login btn-block rounded-pill">
                Crear una cuenta
                </button>
            </Link>
            <Link to="/home" className="d-none" id="login_to_home"></Link>

            <br />
            <Link to="/resetPassword" className="link-form text-login">
              Olvidé mi contraseña
            </Link>
            {/* <Link to="" className="link-form text-login">
              Crear una cuenta
            </Link> */}
          </div>
        </div>
      </div >
    );
  }
}
