import React, { Component } from 'react';
import MapWrapper from '../components/Map.component'
import Styled from 'styled-components'
const MapContainer = Styled.div`
height: 70vh;
`

export default class Rutas extends Component {

    iniciarViaje() {
        console.log("iniciado viaje");
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col col-10 col-lg-7 mx-auto text-center mt-3">
                        <h1>Velcome to routes</h1>

                        <MapContainer>
                            <MapWrapper />
                        </MapContainer>


                        <button
                            onClick={this.iniciarViaje}
                            className="btn btn-success btn-block btn-lg">
                            Iniciar viaje
                    </button>
                    </div>
                </div>
            </div >
        );
    }
}


