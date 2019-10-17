import React from "react";
import userService from "../services/userAuth.service";
import geoService from "../services/geo.service";

class MisRutas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uid: userService.getId()
		};
	}

	async componentDidMount() {
		let rutas = await geoService.getGeoByUserId(this.state.uid);
		console.log(rutas);

		this.setState({ ...this.state, rutas });
	}

	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col col-11 col-md-9 mt-5 pt-5">
							<h1>Mis Rutas</h1>
							<div className="rutas_inner_container">
								{!this.state.rutas
									? "loading..."
									: this.state.rutas
											.sort((a, b) => b.start_timestamp - a.start_timestamp)
											.map(ruta => (
												<div
													className="ruta_container card my-3 px-2"
													key={ruta._id}
												>
													<div className="card-body">
														<div className="card-title">
															<h5>
																Duración:{" "}
																{Math.floor(
																	(ruta.end_timestamp - ruta.start_timestamp) /
																		60000
																)}{" "}
																Minutos
															</h5>
														</div>
														<p>Punto de partida</p>
														<ul>
															<li>Lat: {ruta.deltas[0].lat}</li>
															<li>Lng: {ruta.deltas[0].lng}</li>
														</ul>
														<p>Punto de destino</p>
														<ul>
															<li>
																Lat: {ruta.deltas[ruta.deltas.length - 1].lat}
															</li>
															<li>
																Lng: {ruta.deltas[ruta.deltas.length - 1].lng}
															</li>
														</ul>
													</div>
												</div>
											))}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default MisRutas;
