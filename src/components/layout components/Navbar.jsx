import React from "react";
import userAuth from "../../services/userAuth.service";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  cerrarSesion() {
    userAuth.logout();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-white fixed-top border-bottom text-center">
          <a className="navbar-brand" href="/"></a>
          <button
            className="navbar-toggler collapsed bg-oranges"
            type="button"
            data-toggle="collapse"
            data-target="#collapse"
            aria-controls="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon oranges"></span>
          </button>

          <div className="navbar-collapse collapse" id="collapse">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link menu" to="/profile">
                  Mi perfil <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/misaportes">
                  Mis Aportes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link menu" to="/faqs">
                  Ayuda
                </Link>
              </li>
              <li className="nav-item  text-danger">
                <a
                  className="nav-link  text-danger "
                  href="/"
                  onClick={this.cerrarSesion}
                >
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
