import React, { Component } from 'react';
import MapWrapper from '../components/Map.component'
import Styled from 'styled-components'

const MapContainer = Styled.div`
    height: 100vh;
`


export default class Rutas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uid: "5d9a1e65b36dac1f21e6c2be", // my@email.com
        }
        this.mapWrapperRef = React.createRef();
        this.iniciarViaje = this.iniciarViaje.bind(this)
    }

    iniciarViaje() {
        console.log("iniciado viaje");
        this.mapWrapperRef.startGeo();
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col col-10 col-lg-7 mx-auto text-center mt-3">


                        <h1>Velcome to routes</h1>
                        {/* 
                        <button
                            className="mb-5 btn btn-success btn-block btn-lg"
                            onClick={this.iniciarViaje}>
                            Iniciar viaje
                        </button> */}
                        <MapContainer className="mt-5">
                            <MapWrapper
                                ref={this.mapWrapperRef}
                                data={{ uid: this.state.uid, }}
                            />
                        </MapContainer>




                    </div>
                </div>
            </div >
        );
    }
}


