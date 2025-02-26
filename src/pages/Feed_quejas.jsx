import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/CardPqrs";
import CallToAction from "../components/CallToAction";

export default class FeedQuejas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      esQueja: true
    };
  }

  async traerTodo() {
    try {
      let data = await fetch("https://aka-geek.appspot.com/api/publicaciones/");
      data = await data.json();

      data = data
        .filter(post => post.esQueja === true)
        .sort((b, a) => a.timestamp - b.timestamp);
      console.log(data);

      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.traerTodo();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-left pt-5 mt-5">
          <Link to="/sugerencias" className="align-top text-dark">
            <li className="fas fa-chevron-left fa-2x color-orange align-middle"></li>
            Ir a Sugerencias
          </Link>
        </div>
        <div className="container mb-5">
          {!this.state.data
            ? "loading feed..."
            : this.state.data.map((entry, i) => <Card data={entry} key={i} />)}

          {/* <div className="card mt-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <small className="form-text text-muted">METRO</small>
                <small className="form-text text-muted">5 min</small>
              </div>
              <h5 className="card-title">El metro hace muchas paradas</h5>
              <p className="card-text">
                Normalmente un viaje de san antonio a la estrella demora 25 minutos, pero la mayoría de veces esta demorando mas de 40 minutos porque para antes de llegar a cada estación.
                <span className="text-info">#metromedellin#elmetroeslento#movilidadagil</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div><a href="/" className="btn color-orange border">
                  Comentar
              </a></div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <small className="form-text text-muted">TRÁNSITO/VÍAS</small>
                <small className="form-text text-muted">15 min</small>
              </div>
              <h5 className="card-title">Accidentes por huecos</h5>
              <p className="card-text">
                Se ha vuelto costumbre ver accidentes en la vía robledo por huecos, muy peligrosas esas calles
                <span className="text-info">#robledo#viasconhuecos#arreglarvias#noserobeneldinero</span>
              </p>
              <div className="d-flex justify-content-between pt-3">
                <div>
                  <i className="fas fa-heart text-danger fa-2x"></i>
                </div>
                <div><a href="/" className="btn color-orange border">
                  Comentar
              </a></div>
              </div>
            </div>
          </div> */}
        </div>

        <CallToAction laQueja={this.state.esQueja} />
      </React.Fragment>
    );
  }
}
