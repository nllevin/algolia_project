import React, { Component } from "react";
import { GeoSearch, Marker } from "react-instantsearch-dom-maps";

class Geo extends Component {
  InfoWindow = new this.props.google.maps.InfoWindow()

  onClickMarker = ({ hit, marker }) => {
    if (this.InfoWindow.getMap()) this.InfoWindow.close();
    this.InfoWindow.setContent(`${hit.firstname} ${hit.lastname}`);
    this.InfoWindow.open(marker.getMap(), marker);
  }

  render() {
    const { google } = this.props;

    return (
      <GeoSearch
        google={google}
        initialZoom={8}
        maxZoom={18}
        mapTypeControl={false}
        initialPosition={{
          lat: 40.7128,
          lng: -74.0060
        }}
        enableRefine={false}
      >
        {({ hits }) => (
          <div>
            {hits.map(hit => (
              <Marker 
                key={hit.objectID} 
                hit={hit} 
                onClick={({ marker }) => {
                  this.onClickMarker({
                    hit,
                    marker
                  })
                }}
              />
            ))}
          </div>
        )}
      </GeoSearch>
    );
  }
}

export default Geo;
