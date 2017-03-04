
import React, {Component} from 'react';
import { Panel  } from 'react-bootstrap';

import GoogleMap from '../GoogleMap/GoogleMap.js';
import { getVehicles } from '../API/Api.js';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const plotVehicles = () => getVehicles().then((results) => {
      const markers = results.data.map((item, index) => {
        return {
          position: {
            lat: item.lat,
            lng: item.lon,
          },
          key: index,
          icon: {
            path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 1.5,
            fillColor: '#000080',
            strokeColor: '#000080',
            fillOpacity: 1,
            strokeOpacity: 1,
            rotation: item.heading,
          },
        };
      });
      this.setState({ markers });
    });

    plotVehicles();
    window.setInterval(plotVehicles, 2000);
  }

  render() {
    return (
  <Panel >


      <div style={{ height: '50vh' }}>
        <GoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>

  </Panel>

    );
  }
}
