// AIzaSyBR2hC9 - yDWoIwOdVCJYyz_RBtIncZcHuc;

import React, { Component } from "react";

export class Maps extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let newLocation = this.props.meetup.location.split(" ").join("+");
    const mapUrl = encodeURI(
      `https://www.google.com/maps/embed/v1/place?key=AIzaSyBR2hC9 - yDWoIwOdVCJYyz_RBtIncZcHuc&q=${newLocation}`
    );
    console.log(mapUrl);
    return (
      <div>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={mapUrl}
          className="mapDiv"
        ></iframe>
      </div>
    );
  }
}

export default Maps;
