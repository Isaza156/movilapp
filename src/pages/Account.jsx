import React, { Component } from "react";
import WOW from "wowjs";
import "../components/styles/account.css";
import { Link } from "react-router-dom";

class Form extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  handleSubmit(e) {
    e.preventDefault();
    // //   // console.log("Insertado " + JSON.stringify(this.state.values));
    this.traerTodo();
  }
  async traerTodo() {
    try {
      let response = await fetch("https://aka-geek.appspot.com/api/usuarios", {
        //     mode: "no-cors",
        method: "POST", // or 'PUT'
        body: JSON.stringify(this.state), // data can be `string` or {object}!
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-login wow fadeIn ">
          <div className="container ">
            <div className="row">
              <div className="col-lg-8 col-sm-12 col-xs-12 m-auto">
                <div className="register Login text-center mt-5"></div>
                <div className="text-center">
                  <i className="fas fa-user-circle fa-5x text-login"></i>
                  <form className="mt-5 ml-5 mr-5 pb-3">
                    <input
                      type="text"
                      id="inputName"
                      className="form-control input-text mb-2 input-hover"
                      placeholder="Nombre de usuario* "
                      required
                    />
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control input-text mb-2 input-hover"
                      placeholder="Correo electrónico* "
                      required
                    />
                    <input
                      type="tel"
                      id="inputPhone"
                      className="form-control input-text mb-2 input-hover"
                      placeholder="Numero de teléfono* "
                      required
                    />
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control input-text mb-2 input-hover"
                      placeholder="Contraseña* "
                      required
                    />
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control input-text mb-2 input-hover"
                      placeholder="Confirmar contraseña* "
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
                    <Link to="/move">
                      <button
                        className="btn btn-login btn-lg text-login mt-5 mb-3 rounded-pill"
                        type="submit"
                      >
                        Crear cuenta
                      </button>
                    </Link>
                    <br />
                    <Link to="/login" className="link-form text-login ">
                      Ya tengo una cuenta. Iniciar sesión
                    </Link>
                    <br />
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

export default Form;
