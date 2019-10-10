import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import io from 'socket.io-client';

const socket = io('http://aka-geek.appspot.com/');
// const socket = io('http://localhost:3000/');
const MY_KEY = 'AIzaSyD1hgxz2s03ONPupb2zMGQjqwkNH7SBt_o' || process.env.MAPS_API_KEY

export class MapWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uid: this.props.data.uid, // my@email.com
            initialLocation: { lat: 0, lng: 0 },

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapStyles: {
                width: '100%',
                height: '70%'
            },
        }
        this.startGeo = this.startGeo.bind(this)

        navigator.geolocation.getCurrentPosition(pos => {
            this.state.initialLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }
            this.forceUpdate()
        })

    }

    startGeo() {
        if ("geolocation" in navigator) {
            console.log("init location trakin")
            navigator.geolocation.watchPosition(pos => {
                let location = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    alt: pos.coords.altitude,
                    speed: pos.coords.speed,
                    direction: pos.coords.heading,
                    timestamp: pos.timestamp
                }
                console.log("se envió", location)
                this.state.currentLocation = { ...location }
                socket.emit('new-delta', { ...location, uid: "5d9a1e65b36dac1f21e6c2be" })
                this.forceUpdate()
            })
        } else { console.log("no location") }
    }


    render() {
        const { mapStyles } = this.state
        return (
            <>

                <button
                    className="mb-5 btn btn-success btn-block btn-lg"
                    onClick={this.startGeo}>
                    Iniciar viaje
                </button>
                <div className="inner_map_container bg-dark">
                    <Map
                        google={this.props.google}
                        style={mapStyles}
                        zoom={18}
                        centerAroundCurrentLocation={true}
                        center={
                            (this.state.currentLocation) ?
                                { ...this.state.currentLocation }
                                :
                                { ...this.state.initialLocation }
                        }
                    >


                    </Map>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: MY_KEY
})(MapWrapper);