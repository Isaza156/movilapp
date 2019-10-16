import React from "react";
// import WOW from "wowjs";
import { Link } from "react-router-dom";
import "../components/styles/move.css";
import userAuth from "../services/userAuth.service";

class Move extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: userAuth.getId(),
      caminando: false,
      bicicleta: false,
      metro: false,
      taxi: false,
      plataformas: false,
      bus: false,
      moto: false,
      carro: false,
      otro: false,
      descripcion: "",
      cilindraje: "",
      modelo: "",
      pasajeros: "",
      check1: false,
      check2: false
    };
    this.onCheckChange = this.onCheckChange.bind(this);
    this.CheckChange = this.CheckChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   //  this.handleClick = this.handleClick.bind(this);
  }
  onCheckChange(e) {
    console.log(e.target.checked);
    this.setState({
      [e.target.name]: e.target.checked
    });
  }
  CheckChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {

    e.preventDefault();
    try {
      let response = await fetch(
        `https://aka-geek.appspot.com/api/usuarios/${this.state.uid}`,
        {
          method: "PUT", // or 'PUT'
          body: JSON.stringify(this.state), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      let data = await response.json();
      console.log(data);
      await document.querySelector('#linkMove').click();
    } catch (error) {
      
      console.error(error);

      /*.then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));*/
    }
  }

  // handleClick(){
  //   document.querySelector('#linkMove').click();    
  // }

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
                  <label className="custom-control-label" htmlFor="bicicleta">
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
                  <label className="custom-control-label" htmlFor="metro">
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
                  <label className="custom-control-label" htmlFor="taxi">
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
                  <label className="custom-control-label" htmlFor="plataformas">
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
                  <label className="custom-control-label" htmlFor="bus">
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
                  <label className="custom-control-label" htmlFor="moto">
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
                  <label className="custom-control-label" htmlFor="carro">
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
                  <label className="custom-control-label" htmlFor="otro">
                    Otro
                  </label>
                </div>
                <input
                  className="form-control line"
                  type="text"
                  name="descripcion"
                  placeholder="¿Cuál?"
                  value={this.state.descripcion}
                  onChange={this.CheckChange}
                />
              </div>
            </div>
            <hr />
            <div className="container form-check">
              <div className="custom-control custom-radio mr-sm-2 mb-3">
                <input
                  type="checkbox"
                  name="check1" //medio de transporte sitio / estudio
                  className="custom-control-input"
                  id="customControlAutosizing10"
                  checked={this.state.check1}
                  onChange={this.onCheckChange}
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
                  type="checkbox"
                  name="check2" //medio de transporte como herramienta de trabajo
                  className="custom-control-input"
                  id="customControlAutosizing11"
                  checked={this.state.check2}
                  onChange={this.onCheckChange}
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
                      name="cilindraje"
                      placeholder="125cc"
                      value={this.state.cilindraje}
                      onChange={this.CheckChange}
                    />
                  </div>
                  <div className="col-6">
                    <h6>Modelo</h6>
                    <input
                      type="text"
                      className="form-control text-center line"
                      name="modelo"
                      placeholder="2019"
                      value={this.state.modelo}
                      onChange={this.CheckChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <h6>Pasajeros promedio en el recorrido.</h6>
                  <input
                    type="text"
                    className="form-control text-center line"
                    name="pasajeros"
                    placeholder="2"
                    value={this.state.pasajeros}
                    onChange={this.CheckChange}
                  />
                </div>
              </div>
            </div>
            <div className="container text-center mb-5 pb-3">
              
              <button
                type="submit"
                className="btn btn-lg  btn-login"
                onClick={this.handleClick}
              >
                Iniciar
              </button>
              <Link to="/home" id="linkMove" className="d-none"> 
               </Link> 
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Move;
