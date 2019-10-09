import React from "react";
import WOW from "wowjs";
//import { Link } from "react-router-dom";
import "../components/styles/move.css";

  
class Move extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caminando:false,
      bicicleta:false,
      metro:false,
      taxi:false,
      plataformas:false,
      bus:false,
      moto:false,
      carro:false,
      otro:false,
      descripcion:"",
      check1:false,
      check2:false
    }
    this.onCheckChange = this.onCheckChange.bind(this)
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  onCheckChange(e){
    console.log(e.target.checked);
    this.setState({
        [e.target.name]: e.target.checked

    })
  }
  // handleChange = e => {
  //   this.setState({
  //     values: {
  //       ...this.state.values,
  //       [e.target.name]: e.target.value
  //     }
  //   });
  // };



//   handleSubmit(e){
//   e.preventDefault();
//    console.log(this.state.values.caminando)
//  }


  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}> 
        <div className="container pt-5 mt-5 wow fadeIn">
          <h2 className="mb-5 text-center">¿Cómo me movilizo?</h2>
          <div className="container row ml-2">
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="caminando"
                  name="caminando"
                  checked={this.state.caminando}
                  onChange={this.onCheckChange}
                 // value={this.state.values.caminando}

                />
                <label
                  className="custom-control-label"
                  htmlFor="caminando"
                  name="caminando"
                  //value={this.state.values.caminando}
                >
                  Caminando
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="bicicleta"
                  name="bicicleta"
                  checked={this.state.bicicleta}
                  onChange={this.onCheckChange}
         //         value={this.state.values.bicicleta}
                />
                <label
                  className="custom-control-label"
                  htmlFor="bicicleta"
                >
                  Bicicleta
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="metro"
                  name="metro"
                  checked={this.state.metro}
                  onChange={this.onCheckChange}
           //       value={this.state.values.metro}
                />
                <label
                  className="custom-control-label"
                  htmlFor="metro"
                >
                  Metro
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="taxi"
                  name="taxi"
                  checked={this.state.taxi}
                  onChange={this.onCheckChange}
             //     value={this.state.values.taxi}
                />
                <label
                  className="custom-control-label"
                  htmlFor="taxi"
                >
                  Taxi
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="plataformas"
                  name="plataformas"
                  checked={this.state.plataformas}
                  onChange={this.onCheckChange}
               //   value={this.state.values.plataformas}
                />
                <label
                  className="custom-control-label"
                  htmlFor="plataformas"
                >
                  Plataformas
                </label>
              </div>
            </div> 
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="bus"
                  name="bus"
                  checked={this.state.bus}
                  onChange={this.onCheckChange}
                 // value={this.state.values.bus}
                />
                <label
                  className="custom-control-label"
                  htmlFor="bus"
                >
                  Bus
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input text-danger"
                  id="moto"
                  name="moto"
                  checked={this.state.moto}
                  onChange={this.onCheckChange}
                  //value={this.state.values.moto}
                />
                <label
                  className="custom-control-label"
                  htmlFor="moto"
                >
                  Moto
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="carro"
                  name="carro"
                  checked={this.state.carro}
                  onChange={this.onCheckChange}
                  //value={this.state.values.carro}
                />
                <label
                  className="custom-control-label"
                  htmlFor="carro"
                >
                  Carro
                </label>
              </div>
              <div className="custom-control custom-checkbox mr-sm-2 mb-1">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="otro"
                  name="otro"
                  checked={this.state.otro}
                  onChange={this.onCheckChange}
             //     value={this.state.values.otro}
                />
                <label
                  className="custom-control-label"
                  htmlFor="otro"
                >
                  Otro
                </label>
              </div>
              <input
                className="form-control line"
                type="text"
                name="descripcion"
                placeholder="¿Cuál?"
              />
            </div>
          </div>
          <hr />
          <div className="container form-check">
            <div className="custom-control custom-radio mr-sm-2 mb-3">
              <input
                type="radio"
                name="check1" //medio de transporte sitio / estudio
                className="custom-control-input"
                id="customControlAutosizing10"
              />
              <label
                className="custom-control-label"
                htmlFor="customControlAutosizing10"
              >
                Uso el medio de transporte para dirigirme a mi sitio de
                trabajo/estudio.
              </label>
            </div>
            <div className="custom-control custom-radio mr-sm-2 mb-3">
              <input
                type="radio"
                name="check2" //medio de transporte como herramienta de trabajo
                className="custom-control-input"
                id="customControlAutosizing11"
              />
              <label
                className="custom-control-label"
                htmlFor="customControlAutosizing11"
              >
                Uso el medio de transporte como herramienta de trabajo.
              </label>
            </div>
          </div>
          <hr />
          <div className="container text-center">
            <div className="mb-5">
              <h4>Información del vehiculo (Opcional)</h4>
            </div>
            <div>
              <div className="row mb-4">
                <div className="col-6">
                  <h6>Cilindraje</h6>
                  <input
                    type="text"
                    className="form-control text-center line"
                    placeholder="125cc"
                  />
                </div>
                <div className="col-6">
                  <h6>Modelo</h6>
                  <input
                    type="text"
                    className="form-control text-center line"
                    placeholder="2019"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h6>Pasajeros promedio en el recorrido</h6>
                <input
                  type="text"
                  className="form-control text-center line"
                  placeholder="2"
                />
              </div>
            </div>
          </div>
          <div className="container text-center">
            {/* <Link to="/home"> */}
              <button 
               type="button"
               className="btn btn-lg mb-5 btn-login"
               onClick={this.handleClick}
               >
                Iniciar
              </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
     
      </React.Fragment>
    );
  }
}

export default Move;
