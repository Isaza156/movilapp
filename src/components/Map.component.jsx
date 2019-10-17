import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Spinner from "react-bootstrap/Spinner";
import userAuth from "../services/userAuth.service";

import io from "socket.io-client";
let nav_geo_temp_id;

let socket;
// const socket = io('http://localhost:3000/');

const MY_KEY =
	"AIzaSyD1hgxz2s03ONPupb2zMGQjqwkNH7SBt_o" || process.env.MAPS_API_KEY;

export class MapWrapper extends Component {
	constructor(props) {
		super(props);

		socket = io("https://aka-geek.appspot.com/");

		this.state = {
			uid: this.props.data.uid, // my@email.com
			initialLocation: { lat: 0, lng: 0 },

			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
			mapStyles: {
				width: "100%",
				height: "70%"
			}
		};

		// this.startGeo = this.startGeo.bind(this);
		// this.endGeo = this.endGeo.bind(this);
		// this.toggleBtn = this.toggleBtn.bind(this);

		navigator.geolocation.getCurrentPosition(pos => {
			this.state.initialLocation = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			};
			this.forceUpdate();
		});
	}

	toggleBtn = () => {
		document.querySelector("#map_btn_init").classList.toggle("d-none");
		document.querySelector("#map_btn_end").classList.toggle("d-none");
		document.querySelector("#sipnner_container").classList.toggle("d-none");
	};

	startGeo = () => {
		this.toggleBtn();
		socket.emit("started_trip", this.state.uid);
		if ("geolocation" in navigator) {
			console.log("location is active");
			nav_geo_temp_id = navigator.geolocation.watchPosition(pos => {
				let location = {
					lat: pos.coords.latitude,
					lng: pos.coords.longitude,
					alt: pos.coords.altitude,
					speed: pos.coords.speed,
					direction: pos.coords.heading,
					timestamp: pos.timestamp
				};

				console.log(location);
				this.state.currentLocation = { ...location };
				socket.emit("new-delta", { ...location });

				this.forceUpdate();
			});
		} else {
			console.log("ERR: no location is possible");
		}
	};

	endGeo = () => {
		this.toggleBtn();
		socket.disconnect();
		console.log("socket is out");
		navigator.geolocation.clearWatch(nav_geo_temp_id);
	};

	render() {
		const { mapStyles } = this.state;
		return (
			<div className="map_container">
				<button
					id="map_btn_init"
					className="mb-5 btn btn-success btn-block btn-lg"
					onClick={this.startGeo}
				>
					Iniciar viaje
				</button>
				<button
					id="map_btn_end"
					className="mb-5 btn btn-danger btn-block btn-lg d-none"
					onClick={this.endGeo}
				>
					Terminar viaje
				</button>

				<div id="sipnner_container" className="my-5 text-center d-none">
					<span className="text-success">Compartiendo ubicación...</span>
					<br />
					<Spinner animation="grow" variant="success" />
				</div>
				<div className="inner_map_container bg-dark">
					<Map
						google={this.props.google}
						style={mapStyles}
						zoom={18}
						centerAroundCurrentLocation={true}
						center={
							this.state.currentLocation
								? { ...this.state.currentLocation }
								: { ...this.state.initialLocation }
						}
					></Map>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: MY_KEY
})(MapWrapper);
