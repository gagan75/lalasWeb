import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
  width: '100%',
  height: '400px'
}

 class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: 28.535517,
            lng: 77.391029
        }} style={style} >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCBoGSLMI_R7JWClnN0Nm6agtdmWTqMJmQ")
})(MapContainer); 