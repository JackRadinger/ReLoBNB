import React from 'react';
import GoogleMapReact from 'google-map-react';

function MapContainer ({defaultCenter}) {

  return (
     <GoogleMapReact className='google-maps'
        bootstrapURLKeys={{ key: 'AIzaSyAVeGzEJGO5xqEjzEupdpexwM9zd4pmWe0' }}
        defaultCenter={defaultCenter}
        defaultZoom={11}
     >

     </GoogleMapReact>
  )
}

export default MapContainer;
