import React, { Component } from "react";
import EditMeetup from "./Inputs/EditMeetup";
import ReactMapGL from "./Map/Map";
import Attendees from "./Attendees/Attendees";
import JoinMeetup from "./Inputs/JoinMeetup";
import photo from "./boardGame.jpg";
import Maps from "./Map/Maps";

export class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
      // theMeetup: null
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

        // this.getLocation(meetup.location);
      }
    });
    this.props.games.forEach(game => {
      if (theMeetup.game === game.name) {
        theGame = game;
      }
    });
    const attendees = theMeetup.attendees.map(attendee => {
      return (
        <li key={attendee + theMeetup.attendees.indexOf(attendee)}>
          {attendee}
        </li>
      );
    });
    return (
      <div>
        <div className="allMeetupInfo">
        <h4 className="pageHeader">
                <b>{theMeetup.title}</b>
              </h4>
          <div className="meetupInfo">
            
            <div>
              <p className="info">
                <p className="bold">Creator:</p> {theMeetup.creator}
              </p>
              <p className="info">
                <p className="bold">Date:</p> {theMeetup.date}
              </p>
              <p className="info">
                <p className="bold">Time:</p> {theMeetup.time}
              </p>
              <p className="info">
                <p className="bold">Location:</p> {theMeetup.location}
              </p>
              <p className="info">
                <p className="bold">Description:</p> {theMeetup.description}
              </p>
            </div>
            <div>
              <Maps meetup={theMeetup} />
              {/* <ReactMapGL meetup={theMeetup} /> */}
            </div>
          </div>
          <div className="attendees">
            <div>
              <p className="players">Players</p>
              <ul>{attendees}</ul>
            </div>
            <JoinMeetup {...this.props} />
          </div>
          {theGame !== undefined ? (
            <div className="GameInfo">
              <img
                className="gameImg"
                alt="game"
                src={`${theGame.image_url}`}
              />
              <h1 className="bold">{theGame.name}</h1>
              <p>{theGame.description}</p>
              <a
                className="linkBlack bold"
                href={theGame.official_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information About {theGame.name}
              </a>
            </div>
          ) : (
            <div>
              <img src={photo} alt="game" />
              <p>No game information to display at this time.</p>
            </div>
          )}
        </div>
        <EditMeetup
          getData={this.props.getData}
          {...this.props}
          meetup={theMeetup}
        />
      </div>
    );
  }
}

export default Meetup;
