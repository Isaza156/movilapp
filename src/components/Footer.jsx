import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer mt-auto py-3 bg-white border-top">
          <div className="container text-center ">
            <div className="row">
              <div className="col-4 col-md-4">
                <i className="fas fa-road color-orange fa-2x"></i>
                <Link to="/" className=" mt-3 text-dark">
                  
                  <br /> Trayectos
                </Link>
              </div>
              <div className="col-4 col-md-4">
                <i className="fas fa-home color-orange fa-2x"></i>
                <Link to="/home" className=" mt-3 text-dark">
                  
                  <br /> Inicio
                </Link>
              </div>
              <div className="col-4 col-md-4">
                <i className="fas fa-paper-plane color-orange fa-2x"></i>
                <Link to="/pqrs" className=" mt-3 text-dark">
                 
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
