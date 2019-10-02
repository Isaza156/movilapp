import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: this.props.data.texto,
      categorias: this.props.data.categorias,
      entidades: this.props.data.entidades,
      likes: this.props.data.likes,
      ubicacion: this.props.data.ubicacion     
    };
  }
  render() {
    return (
      <>
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <small className="form-text text-muted ">
                {!this.state.entidades
                  ? "loading..."
                  : this.state.entidades.map(
                      entidad => `${entidad.toUpperCase()}/`
                    )}
              </small>
              <small className="form-text text-muted">1 min</small>
            </div>
            <h5 className="card-title">
              {!this.state.ubicacion ? "loading..." : this.state.ubicacion}
            </h5>
            <p className="card-text">
              {!this.state.texto ? "loading..." : this.state.texto}
              <br/>
              <span className="text-info">
                {!this.state.categorias
                  ? "loading..."
                  : this.state.categorias.map(categoria => `#${categoria} `)}
              </span>
            </p>

            <div className="d-flex justify-content-between pt-3">
              <div>
                <i className="fas fa-heart text-danger fa-2x"></i>
              </div>
              <div>
                <a href="/" className="btn color-orange border">
                  Comentar
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
