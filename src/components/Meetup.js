import React, { Component } from "react";
import EditMeetup from "./Inputs/EditMeetup";
import JoinMeetup from "./Inputs/JoinMeetup";
import photo from "./boardGame.jpg";
import Maps from "./Map/Maps";

export class Meetup extends Component {
  render() {
    let theMeetup;
    let theGame;

    this.props.meetups.forEach(meetup => {
      if (meetup._id === this.props.match.params.id) {
        theMeetup = meetup;
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
            <div className="infoDiv">
              <div className="info">
                <p className="bold">Creator</p> {theMeetup.creator}
              </div>
              <div className="info">
                <p className="bold">Game</p> {theMeetup.game}
              </div>
              <div className="info">
                <p className="bold">Date</p> {theMeetup.date}
              </div>
              <div className="info">
                <p className="bold">Time</p> {theMeetup.time}
              </div>
              <div className="info">
                <p className="bold">Location</p> {theMeetup.location}
              </div>
              <div className="info">
                <p className="bold">Description</p> {theMeetup.description}
              </div>
            </div>
            <div className="mapDiv">
              <Maps meetup={theMeetup} />
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
              <h1 className="eventName">{theGame.name}</h1>
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
