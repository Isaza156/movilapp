import React, { Component } from "react";
import MapWrapper from "../components/Map.component";
import Styled from "styled-components";
import userService from "../services/userAuth.service";

const MapContainer = Styled.div`
    height: 100vh;
`;

export default class Rutas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: userService.getId() // my@email.com
		};
		this.mapWrapperRef = React.createRef();
		this.iniciarViaje = this.iniciarViaje.bind(this);
	}

	iniciarViaje() {
		console.log("iniciado viaje");
		this.mapWrapperRef.startGeo();
	}

	render() {
		return (
			<div className="container  animated fadeInUp">
				<div className="row pt-5">
					<div className="col col-10 col-lg-7 mx-auto text-center mt-3">
						<h1>Comparte tus rutas!!</h1>
						<div className="misViajes_container"></div>
						<MapContainer className="mt-5">
							<MapWrapper
								ref={this.mapWrapperRef}
								data={{ uid: this.state.uid }}
							/>
						</MapContainer>
					</div>
				</div>
			</div>
		);
	}
}
