import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/images/logo.png";
import "../components/styles/splash.css";

class Splash extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center center wow fadeIn" data-wow-duration="5s">
          <div className="mb-5">
            <h1>MovilApp</h1>
          </div>
          <div className="mb-5">
            <Link to="/login">
              <img
                src={Logo}
                alt="Logo"
                className="borde"
                width="200"
                height="200"
              />
            </Link>
          </div>
          <div className="mb-5">
            <h4>Por una mejor movilidad</h4>
          </div>
        </div>
        <div className="footer text-center text-secondary wow fadeIn" data-wow-duration="5s">
          <h6>
            <small>MovilApp 2019. Todos los derechos reservados.</small>
          </h6>
        </div>
      </React.Fragment>
    );
  }
}

export default Splash;
