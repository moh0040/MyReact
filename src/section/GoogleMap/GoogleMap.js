//Map.js
import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Google = withGoogleMap((props) => {
 return (
  <GoogleMap
   ref={props.onMapLoad}
   defaultZoom={14}
   defaultCenter={{ lat: 49.833773, lng: 18.164527 }}
   onClick={props.onMapClick}
  >
   {props.markers && props.markers.map(marker => (
    <Marker
     {...marker}
    />
   ))}
  </GoogleMap>
 );
});
export default Google;
