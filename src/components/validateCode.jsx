import React, { Component } from "react";
import "./styles/FormStyle.css";
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
                        <Link to={"/"}>
                          <button
                            className="btn btn-outline-secondary  mt-4 mb-3 mr-1"
                            type="submit"
                          >
                            No recibí mi código
                          </button>
                        </Link>

                        <button
                          className="btn btn-login  text-login mt-4 mb-3 "
                          type="submit"
                          
                        >
                          Validar mi código
                        </button>
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

export default ValidateCode ;
