import React, { Component } from "react";
import EditMeetup from "./Inputs/EditMeetup";
import ReactMapGL from "./Map/Map";
import Attendees from "./Attendees/Attendees";
// import JoinMeetup from "./Inputs/JoinMeetup";

export class Meetup extends Component {
  render() {
    let theMeetup;
    let theGame;

    this.props.meetups.forEach(meetup => {
      if (meetup._id === this.props.match.params.id) {
        theMeetup = meetup;
        console.log(theMeetup);
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
        <div className="allMeetupInfo">
        <div className="meetupInfo">
          <div>
            <h4 className="eventName"><b>{theMeetup.title}</b></h4>
            <p><b>Creator:</b> {theMeetup.creator}</p>
            <p><b>Date:</b> {theMeetup.date}</p>
            <p><b>Time:</b> {theMeetup.time}</p>
            <p><b>Location:</b> {theMeetup.location}</p>
            <p><b>Description:</b> {theMeetup.description}</p>
          </div>
          <div>
            <ReactMapGL />
          </div>
        </div>
        <Attendees />
        {/* <JoinMeetup /> */}
        {theGame !== undefined ? (
          <div className="GameInfo">
            <img className="gameImg" alt="game" src={`${theGame.image_url}`} />
            <h1>{theGame.name}</h1>
            <p>{theGame.description}</p>
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
        <EditMeetup getData={this.props.getData} {...this.props} />
      </div>
    );
  }
}

export default Meetup;
