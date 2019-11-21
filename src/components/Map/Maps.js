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
        {/* <h1>hi</h1> */}
        <iframe
          width="200px"
          height="200px"
          frameBorder="0"
          // style="border:0"
          src={mapUrl}
          // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBR2hC9 - yDWoIwOdVCJYyz_RBtIncZcHuc&q=135+W+St+NW+DC+20001"
        ></iframe>
      </div>
    );
  }
}

export default Maps;
