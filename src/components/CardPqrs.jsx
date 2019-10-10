import React, { Component } from "react";
import Comments from './Comments'

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: this.props.data.texto,
      categorias: this.props.data.categorias,
      entidades: this.props.data.entidades,
      likes: this.props.data.likes,
      ubicacion: this.props.data.ubicacion,
      titulo: this.props.data.titulo,
      postid: this.props.data._id,
      time: this.props.data.timestamp
      // postid: this.props.data._id // USAR ESTE PARA QUE LA APP FUNCIONE CUANDO YA SE CONECTEN LOS OTROS METODOS DE LA API..
    };
  }


  componentDidMount() {
    this.traerComentarios();
  }



  async traerComentarios() {
    try {
      let data = await fetch(`https://aka-geek.appspot.com/api/comentarios/getbypostid/${this.state.postid}`);
      data = await data.json();


      this.setState({ ...this.state, comments: data });
    } catch (error) {
      console.error(error);
    }
  }

  getTimeAgo(){
    let timeago = Math.floor(( Date.now()-this.state.time)*0.0001)
    return timeago>60 ? Math.floor(timeago/60)  + " hours": timeago + " min"    
  }

  render() {
    return (
      <>
        <div className="card mx-0 my-5">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <small className="form-text text-muted ">
                {!this.state.entidades
                  ? "loading..."
                  : this.state.entidades.map(
                    entidad => `${entidad.toUpperCase()}/`
                  )}
              </small>
              <small className="form-text text-muted">
              {this.getTimeAgo()}
              </small>
            </div>
            <h5 className="card-title color-orange">
              {!this.state.titulo ? "loading..." : this.state.titulo}
            </h5>
            <p className="card-text">
              {!this.state.texto ? "loading..." : this.state.texto}
              <br />
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
              {/* <div>
                <a href="/" className="btn color-orange border">
                  Comentar
                </a>
              </div> */}
            </div>
            {/* <div className="m-0 p-0">
            <hr className="bg-warning" />
            </div> */}
            {/* <div className="comments_container">
              {!this.state.comments ?
                "loading comments..."
                :
                this.state.comments.map((entry, i) => <Comments data={entry} key={i} />)
              }
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
export default Card;
