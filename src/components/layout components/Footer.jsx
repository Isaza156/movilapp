import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer bg-white border-top">
          <div className="container text-center ">
            <div className="row">
              <div className="col-4 col-md-4 pt-3 mb-2">
                <Link to="/" className="text-dark">
                  <i className="fas fa-road color-orange"></i>

                  <br /> Trayectos
                </Link>
              </div>
              <div className="col-4 col-md-4 pt-3 mb-2">
                <Link to="/home" className="text-dark">
                  <i className="fas fa-home color-orange"></i>

                  <br /> Inicio
                </Link>
              </div>
              <div className="col-4 col-md-4 pt-3 mb-2">
                <Link to="/pqrstwo" className="text-dark">
                  <i className="fas fa-paper-plane color-orange"></i>

                  <br /> Pqrs
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
