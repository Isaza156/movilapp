import React from "react";
import blog from "./images/home.jpeg";
import metro from "./images/metro.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="bg-color-home">
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-home">
              <div className="col-md-5 p-lg-5 mx-auto my-5 bg-color-home">
                <h1 className="display-5 font-weight-bold text-white  titulo-responsive">
                  Bienvenidos a MovilApp
                </h1>
                <p className="lead font-weight-normal"></p>
                <a
                  className="btn bg-orange text-white shadow font-weight-bold mt-4"
                  href="https://wa.me/"
                >
                  Tengo una idea
                </a>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <h2 className="text-center mb-4">Últimas noticias</h2>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      Vías
                    </strong>
                    <h3 className="mb-0">Vías Robledo</h3>
                    <div className="mb-1 text-muted">Sep 12</div>
                    <p className="card-text mb-auto">
                      Logramos que @transitomedellin pusiera mas agentes en las
                      vías de robledo a petición de 5000 usuarios de MovilApp
                    </p>
                    <a href="/" className="stretched-link">
                      Continuar leyendo
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={blog} width="220px" height="260px" alt="" />
                  </div>
                </div>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      Metro
                    </strong>
                    <h3 className="mb-0">Estación Acevedo</h3>
                    <div className="mb-1 text-muted">Sep 18</div>
                    <p className="card-text mb-auto">
                      Se han instalado mas de 20 buses nuevos en la estación acevedo
                      que llevaran a distintos lugares de la ciudad 
                    </p>
                    <a href="/" className="stretched-link">
                      Continuar leyendo
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={metro} width="220px" height="260px" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                  <h2 className="text-center">Nuestro Twitter</h2>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
