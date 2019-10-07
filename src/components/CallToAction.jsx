import React from "react";
import userAuth from '../services/userAuth.service'

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        titulo: "la buena santi",
        texto: "suscribtete a juan zuleta para ser millonario en un dia",
        uid: userAuth.getId(),
        esQueja: this.props.laQueja,
        categorias : [],
        entidades : []
      }
    };
    console.log('La quejaaaaa del state '+this.state.values.esQueja);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount(){
  //   const queja = this.props.laQueja;
  //   this.setState({
  //     esQueja:this.props.laQueja,
  //   })
  //   console.log('La quejaaaaa de los props ----> '+queja);
  //   console.log('La quejaaaaa del state '+this.state.esQueja);
  // }

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit(e) {
    e.preventDefault();
   // console.log("Insertado " + JSON.stringify(this.state.values));
    this.traerTodo()
    document.querySelector('.close').click()

  }

  async traerTodo() {
console.log(this.state.values)
    try {
      let response = await fetch("https://aka-geek.appspot.com/api/publicaciones/", {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state.values), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
  
      let data = await response.json()
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
   
    /*.then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));*/
  }

  handleClick(){
  
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid text-center">
            <i className="fas fa-plus-circle fa-3x color-orange "></i>
            <button
              type="button"
              className="btn btn-primary fas fa-plus-circle fa-3x color-orange sticky mb-5"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Open modal for @mdo
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New message
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <div className="form-group">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Titulo:
                        </label>
                        <input
                          onChange={this.handleChange}
                          type="text"
                          className="form-control"
                          name="titulo"
                          id="titulo"
                          value={this.state.values.titulo}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Comentario:
                        </label>
                        <textarea
                          onChange={this.handleChange}
                          className="form-control"
                          name="texto"
                          id="texto"
                          value={this.state.values.texto}
                        ></textarea>
                      </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={this.handleClick}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CallToAction;
