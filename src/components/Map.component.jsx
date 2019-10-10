import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import io from 'socket.io-client';
const socket = io('https://aka-geek.appspot.com');

//inital

const getInitiLocation = async () => {
    let data = { lat: 0, lng: 0 }
    await navigator.geolocation.getCurrentPosition(pos => {
        console.log("iniciando", pos)
        data = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
        }
    })
    return data
}

const globalInitialLocation = getInitiLocation()
const MY_KEY = 'AIzaSyD1hgxz2s03ONPupb2zMGQjqwkNH7SBt_o' || process.env.MAPS_API_KEY

export class MapWrapper extends Component {
    constructor(props) {
        super(props)
        console.log('1')

        this.state = {
            uid: this.props.data.uid, // my@email.com
            initialLocation: { ...globalInitialLocation },
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapStyles: {
                width: '100%',
                height: '70%'
            },
        }
    }

    startGeo() {

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
                this.forceUpdate()
                socket.emit('new-delta', { ...location, uid: "5d9a1e65b36dac1f21e6c2be" })
            })
        } else { console.log("no location") }
    }


    render() {
        console.log("initial", this.state.initialLocation);

        const { mapStyles } = this.state
        return (
            <div className="inner_map_container bg-dark">

                <Map
                    google={this.props.google}
                    zoom={18}
                    style={mapStyles}

                    center={
                        (this.state.currentLocation) ?
                            { ...this.state.currentLocation }
                            :
                            { ...this.state.initialLocation }
                    }
                >


                </Map>
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: MY_KEY
})(MapWrapper);