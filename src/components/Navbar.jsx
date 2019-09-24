import React from "react";
import LogoNavbar from './images/logo-movilapp.png';

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-dark bg-light">
          <a class="navbar-brand" href="/">
            <img src={LogoNavbar} width="65px" alt=""/>
          </a>
          <button
            class="navbar-toggler collapsed bg-orange"
            type="button"
            data-toggle="collapse"
            data-target="#collapse"
            aria-controls="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="collapse">
            <ul class="navbar-nav mr-auto ">
              <li class="nav-item active">
                <a class="nav-link text-dark" href="/">
                  Mi perfil <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/">
                  Mis aportes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/">
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
