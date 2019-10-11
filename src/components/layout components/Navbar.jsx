import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-white fixed-top border-bottom text-center">
          <a className="navbar-brand" href="/">
          </a>
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
                <a className="nav-link menu" href="/profile">
                  Mi perfil <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu" href="/misportes">
                  Mis Aportes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu" href="/faqs">
                  Ayuda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu" href="/login">
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
