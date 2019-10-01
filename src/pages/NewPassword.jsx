import React, { Component } from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import "../components/styles/reset.css";

class NewPassword extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-login">
          <div className="container wow fadeIn">            
              <div className="row">               
                <div className="col-lg-8 col-sm-12 col-xs-12 mx-auto">
                  <div className="register Login text-center"></div>
                  <div className="text-center">
                    <i className="fas fa-lock-open fa-5x text-login pt-5 mt-5 mb-2"></i>
                    <h2>Ingresar nueva contraseña</h2>
                    <form className="mt-5 ml-5 mr-5 pb-3 ">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control input-text mb-1  input-hover"
                        placeholder="Nueva Contraseña* "
                        required
                      />
                      <input
                        type="password"
                        id="confirmPassword"
                        className="form-control input-text mb-1  input-hover"
                        placeholder="Confirmar contraseña* "
                        required
                      />
                      <br />
                      <Link to="/login">
                        <button className="btn btn-login btn-lg text-login mt-4 mb-3">
                          Restablecer contraseña
                        </button>
                      </Link>
                      <br />
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

export default NewPassword;
