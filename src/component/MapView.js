import React from "react";
import Geocode from "react-geocode";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { message } from "antd";
import { mapConfig } from "../util/dataManagement";

const MapView = (props) => {
  /**
   * display for marker
   * @returns marker
   */
  const displayMarkers = () => {
    return props.points.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          icon={{
            url: "icon.gif",
          }}
          onClick={() => onMarkerClick(store)}
        />
      );
    });
  };

  /**
   * marker click popup the location name using geocode
   * @param {*} store
   */
  const onMarkerClick = (store) => {
    Geocode.setApiKey(mapConfig.apiKey);
    Geocode.fromLatLng(store.latitude, store.longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        message.success(address, 3);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Map
      google={props.google}
      zoom={mapConfig.zoom}
      style={mapConfig.mapStyles}
      initialCenter={mapConfig.initialCenter}
    >
      {displayMarkers()}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: mapConfig.apiKey,
})(MapView);
