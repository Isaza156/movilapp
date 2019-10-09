import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000/');

const MY_KEY = 'AIzaSyD1hgxz2s03ONPupb2zMGQjqwkNH7SBt_o' || process.env.MAPS_API_KEY

export class MapWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapStyles: {
                width: '100%',
                height: '70%'
            },

            uid: "5d9a1e65b36dac1f21e6c2be", // my@email.com
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            initialLocation: {
                lat: 6.2117408,
                lng: -75.5986679
            }
        }

        navigator.geolocation.getCurrentPosition(pos => console.log(pos))


        if ("geolocation" in navigator) {
            console.log("location")
            navigator.geolocation.watchPosition(pos => {
                let location = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    alt: pos.coords.altitude,
                    speed: pos.coords.speed,
                    direction: pos.coords.heading,
                    timestamp: pos.timestamp
                }
                console.log(location)
                this.state["currentLocation"] = { ...location }
                socket.emit('new-delta', { ...location, uid: "5d9a1e65b36dac1f21e6c2be" })
            })
        } else { console.log("no location") }
    }



    render() {
        const { mapStyles } = this.state
        return (
            <div className="inner_map_container bg-dark">

                <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}
                    initialCenter={{ ...this.state.initialLocation }}
                    center={{ ...this.state.currentLocation }}
                >

                    <Marker
                        name={'actual'}
                        position={{ ...this.state.initialLocation }}
                    />

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: MY_KEY
})(MapWrapper);