import React, { Component } from 'react';
import userAuth from '../services/userAuth.service'

export class Misaportes extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.traerUser = this.traerUser.bind(this)
    }

    async traerUser() {
        try {
            let res = await fetch(`https://aka-geek.appspot.com/api/usuarios/${userAuth.getId()}`);

            let data = await res.json();
            delete data._id;
            delete data.uid;

            this.setState({ user: data });
            console.log("estado es:", this.state);
        } catch (error) {
            console.error(error);
        }
    }


    async traerTrayectos() {
        try {
            let res = await fetch(`https://aka-geek.appspot.com/api/geolocation`);

            let data = await res.json();
            let tempuid = userAuth.getId()
            data = data.filter(entry => entry.uid = tempuid)

            this.setState({ trayectos: data });
            console.log("estado es:", this.state);
        } catch (error) {
            console.error(error);
        }
    }


    async traerPublicaciones() {
        try {
            let res = await fetch(`https://aka-geek.appspot.com/api/usuarios/${userAuth.getId()}`);

            let data = await res.json();
            delete data._id;
            delete data.uid;

            this.setState({ ...data });
            console.log("estado es:", this.state);
        } catch (error) {
            console.error(error);
        }
    }


    async traerComentario() {
        try {
            let res = await fetch(`https://aka-geek.appspot.com/api/usuarios/${userAuth.getId()}`);

            let data = await res.json();
            delete data._id;
            delete data.uid;

            this.setState({ ...data });
            console.log("estado es:", this.state);
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.traerUser()
        this.traerTrayectos()
    }

    render() {





        return (
            <div className="container-fluid misaportes_container">
                <div className="row">
                    <div className="col col-10 col-md-7 col-lg-5 mx-auto mt-5 pt-5">
                        <h1>Hola! {this.state.user ? this.state.user.name : "Loading"}</h1>

                        <span className="text-dark">
                            Estos son tus aportes:
                        </span>
                        <div className="misaportes_accordion_container">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="fas fa-road mr-3 "></i>
                                                Rutas / Trayectos
        </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <ul>
                                                {!this.state.trayectos ? "Loading" : this.state.trayectos.map((entry, i) => <li key={i}> #{i} Terminado en {(new Date(entry.end_timestamp)).toString()
                                                } </li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <i className="far fa-lightbulb mr-3"></i>
                                                Sugerencias
        </button>
                                        </h2>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <i className="fas fa-exclamation-triangle mr-3"></i>
                                                Quejas
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <i className="far fa-comments mr-3"></i>
                                                Comentarios
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Misaportes;
