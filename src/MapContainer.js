import React, { Component } from 'react';

class MapContainer extends Component {

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey:AIzaSyAe4-nQSBCEX_bOBMe63otih0zvXUdPtv4
})(MapContainer)
