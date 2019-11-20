import React, { Component } from "react";
import EditMeetup from "./Inputs/EditMeetup";
import DeleteMeetup from "./Inputs/DeleteMeetup";
import ReactMapGL from "./Map/Map";
import Attendees from "./Attendees/Attendees";
import Nav from "./Nav/Nav";
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
        <Nav />
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
        <Attendees />
        {/* <JoinMeetup /> */}
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
