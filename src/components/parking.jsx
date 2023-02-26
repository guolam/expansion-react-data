import React from 'react';
import H from "@here/maps-api-for-javascript";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        // the reference to the container
        this.ref = React.createRef();
        // reference to the map
        this.map = null;
    }

    componentDidMount() {
        if (!this.map) {
            // instantiate a platform, default layers and a map as usual
            const platform = new H.service.Platform({
                apikey: 'l8lsI5OVIV5IPj1XzuvX6Y7sZFVsmDmjcBFM7nCxbcU'
            });
            const layers = platform.createDefaultLayers();
            const map = new H.Map(
                this.ref.current,
                layers.vector.normal.map,
                {
                    pixelRatio: window.devicePixelRatio,
                    center: { lat: latitude, lng: longitude },
                    zoom: 9,
                },
            );
            this.map = map;
        }
    }

    render() {
        return (
            <div
                style={{ position: 'relative', width: '100%', height: '300px' }}
                ref={this.ref}
            />

        )
    }
}
