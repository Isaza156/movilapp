import React, { Component } from 'react';
import MapWrapper from '../components/Map.component'
import Styled from 'styled-components'
const MapContainer = Styled.div`
height: 70vh;
`

export default class Rutas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            uid: "5d9a1e65b36dac1f21e6c2be", // my@email.com
        }


    }

    iniciarViaje() {
        console.log("iniciado viaje");
        this.refs.map_wrapper.startGeo();
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col col-10 col-lg-7 mx-auto text-center mt-3">
                        <h1>Velcome to routes</h1>

                        <MapContainer>
                            <MapWrapper
                                ref="map_wrapper"
                                data={{
                                    uid: this.state.uid,
                                    initialLocation: this.state.initialLocation
                                }}
                            />
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


