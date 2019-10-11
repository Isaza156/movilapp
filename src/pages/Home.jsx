import React from "react";
import blog from "../components/images/home.jpeg";
import metro from "../components/images/metro.jpg";

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <main className="my-5" >
          <div className="bg-color-home">
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center bg-home">
              <div className="col-md-5 p-lg-5 mx-auto my-5 bg-color-home">
                <h1 className="display-5 font-weight-bold text-white  titulo-responsive">
                  Bienvenidos a MovilApp
                </h1>
                <p className="lead font-weight-normal"></p>
                <a
                  className="btn bg-orange text-white shadow font-weight-bold mt-4"
                  href="/suggestions"
                >
                  Tengo una idea
                </a>
              </div>
            </div>
          </div>

          <div className=" py-5">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-3 ml-auto">
                  <h2>¿ Que hacemos ?</h2>
                </div>
                <div className="col-md-5 mr-auto">
                  <p className="lead text-dark">
                    Somos una app de movilidad en donde podrás realizar tus{" "}
                    <strong>QUEJAS</strong> o <strong>SUGERENCIAS</strong> sobre
                    el medio de transporte en el que te movilizas.
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="media">
                    <div className="icon mr-3">
                      <i className="fas fa-paper-plane fa-4x text-success"></i>
                    </div>
                    <div className="media-body">
                      <h3 className="h4">Sugerencias</h3>
                      <p className="text-dark text-left">
                        Podrás realizar sugerencias de medios de transporte que
                        consideres servirian para mejorar tú movilidad en
                        Medellín.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <div className="icon mr-3">
                      <i className="fas fa-exclamation-circle text-danger fa-4x"></i>
                    </div>
                    <div className="media-body">
                      <h3 className="h4">Quejas</h3>
                      <p className="text-dark text-left">
                        Si tienes alguna queja sobre el medio de transporte que
                        utilizas, este es el mejor lugar para hacerlo, haremos
                        llegar todas tus inconformidades a las entidades
                        encargadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <h2 className="text-center mb-5">Últimas noticias</h2>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                      Vías
                    </strong>
                    <h3 className="mb-0">Vías Robledo</h3>
                    <div className="mb-1 text-muted">Sep 12</div>
                    <p className="card-text mb-auto">
                      Logramos que @TransitoMedellin pusiera mas agentes en las
                      vías de robledo a petición de mas de 5.000 usuarios de
                      MovilApp.
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
                      Se han instalado mas de 20 buses nuevos en la estación
                      Acevedo que te llevarán a distintos lugares de la ciudad.
                    </p>
                    <a href="/" className="stretched-link">
                      Continuar leyendo
                    </a>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={metro} width="220px" height="260px" alt="" />
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn color-orange bg-orange text-white bnt-lg">
                    Ver más
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-6 text-center">
                <h2 className="text-center mb-5">Nuestro Twitter</h2>
                <p>Aquí van los twitters de MovilApp</p>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
