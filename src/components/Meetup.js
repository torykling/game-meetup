import React, { Component } from "react";
import EditMeetup from "./Inputs/EditMeetup";
import DeleteMeetup from "./Inputs/DeleteMeetup";
import ReactMapGL from "./Map/Map";
import JoinMeetup from "./Inputs/JoinMeetup";

export class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
    // this.getLocation = this.getLocation.bind(this);
  }

  // getLocation = location => {
  //   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYm9hcmQtZ2FtZS1tZWV0dXAiLCJhIjoiY2szN2UxZG55MGFtbDNnbXI4b2w2b2YyMiJ9.TLHV3tXVaIJkW3Fz52QyxA`;
  //   const encodedLocation = encodeURI(url);
  //   console.log(encodedLocation);
  //   fetch(encodedLocation)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ latitude: res.features.center[0] });
  //       this.setState({ longitude: res.features.center[1] });
  //       console.log(this.state.latitude);
  //       console.log(this.state.longitude);
  //     })
  //     .catch(err => console.log(err));
  // };
  render() {
    let theMeetup;
    let theGame;

    this.props.meetups.forEach(meetup => {
      if (meetup._id === this.props.match.params.id) {
        theMeetup = meetup;
        console.log(theMeetup);
        // this.getLocation(meetup.location);
      }
    });
    this.props.games.forEach(game => {
      if (theMeetup.game === game.name) {
        theGame = game;
        console.log(theGame);
      }
    });

    return (
      <div>
        <h3>Edit this meetup</h3>
        <EditMeetup getData={this.props.getData} {...this.props} />
        <DeleteMeetup {...this.props} />
        <div className="MeetupInfo">
          <h1>{theMeetup.title}</h1>
          <h2>{theMeetup.creator}</h2>
          <h3>{theMeetup.date}</h3>
          <h3>{theMeetup.time}</h3>
          <h3>{theMeetup.location}</h3>
          <h3>{theMeetup.description}</h3>
          <ReactMapGL />
        </div>
        <JoinMeetup {...this.props} />
        {theGame !== undefined ? (
          <div className="GameInfo">
            <h1>{theGame.name}</h1>
            <h3>{theGame.description}</h3>
            <img alt="game" src={`${theGame.image_url}`} />

            <a
              href={theGame.official_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              More Information About {theGame.name}
            </a>
          </div>
        ) : (
          <p>No game information to display at this time.</p>
        )}
      </div>
    );
  }
}

export default Meetup;
