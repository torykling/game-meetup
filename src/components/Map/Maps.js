import React, { Component } from "react";

export class Maps extends Component {
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
          title="map"
        ></iframe>
      </div>
    );
  }
}

export default Maps;
