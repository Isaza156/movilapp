import React, { Component } from "react";
import WOW from "wowjs";
import "../components/styles/account.css";
import { Link } from "react-router-dom";
import userAuthService from "../services/userAuth.service";

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        password:"",
        email:"",
        phone:"",
        confirm_password:""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e){
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    async handleSubmit(e) {
      e.preventDefault();
      let response = await userAuthService.register(this.state);
      if (!response.error) {
        console.log(response.id);
        await userAuthService.setId(response.id)
        await userAuthService.setHardAuth()

        return await document.querySelector('#linkAccount').click();
      }

      let notification = document.querySelector("#notification")
      notification.classList.remove("d-none");
      notification.innerHTML = response.message;
    }

    componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <React.Fragment>
        <form className="bg-login wow fadeIn " onSubmit={this.handleSubmit}>
          <div className="container ">
              <div className="row">
                <div className="col-lg-8 col-sm-12 col-xs-12 m-auto">
                  <div className="register Login text-center mt-5"></div>
                  <div className="text-center">
                    <i className="fas fa-user-circle fa-5x text-login"></i>
                    <div id="notification" className="alert alert-danger d-none"></div>
                    <div className="mt-5 ml-5 mr-5 pb-3">
                      <input
                        type="text"
                        id="inputName"
                        className="form-control input-text mb-2 input-hover"
                        placeholder="Nombre de usuario* "
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control input-text mb-2 input-hover"
                        placeholder="Correo electrónico* "
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="inputPhone"
                        className="form-control input-text mb-2 input-hover"
                        placeholder="Numero de teléfono* "
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control input-text mb-2 input-hover"
                        placeholder="Contraseña* "
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control input-text mb-2 input-hover"
                        placeholder="Confirmar contraseña* "
                        name="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="checkbox"
                        id="checkTerms"
                        className="mt-3 mb-2 input-hover"
                        placeholder="Confirmar contraseña* "
                        required
                      />
                      <span className="link-form text-login mx-1 ">
                        <small>
                          {" "}
                          He leído y acepto los terminos y condiciones{" "}
                        </small>
                      </span>
                      <br />
                        <button
                          className="btn btn-login btn-lg text-login mt-5 mb-3 rounded-pill"
                          type="submit"
                          onClick={this.handleClick}
                        >
                          Crear cuenta
                        </button>
                        <Link to="/move" id="linkAccount" className="d-none">
                      </Link>
                      <br />
                      <Link to="/login" className="link-form text-login ">
                        Ya tengo una cuenta. Iniciar sesión
                      </Link>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
