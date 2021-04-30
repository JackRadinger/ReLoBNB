import React from 'react';
import GoogleMapReact from 'google-map-react';

function MapContainer () {

  const mapStyles = {
    height: "356px",
    width: "633.2px"
  };

  const defaultCenter = {
    lat: 35.650715, lng: -87.016637
  }

  /* 791.5 x 445*/
  return (
     <GoogleMapReact className='google-maps'
        bootstrapURLKeys={{ key: 'AIzaSyAVeGzEJGO5xqEjzEupdpexwM9zd4pmWe0' }}
        defaultCenter={defaultCenter}
        defaultZoom={11}
        // style={mapStyles}
     >

     </GoogleMapReact>
  )
}

export default MapContainer;
