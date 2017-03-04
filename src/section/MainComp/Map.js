
import React, {Component} from 'react';
import { Well  } from 'react-bootstrap';

import GoogleMap from '../GoogleMap/GoogleMap.js';


export default class Map extends Component {

  render() {
    return (
      <Well className="map" >
     <div style={{ height: '50vh' }}>
      <GoogleMap
       containerElement={
        <div style={{ height: '100%' }} />
       }
       mapElement={
        <div style={{ height: '100%' }} />
       }
      />
     </div>
     </Well >
    );
   }
  }
