import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-white fixed-top border-bottom">
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
                <a className="nav-link text-dark" href="/">
                  Mi perfil <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Mis publicaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/faqs">
                  Ayuda
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
