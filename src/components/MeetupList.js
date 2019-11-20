import { Link } from "react-router-dom";
import NewMeetup from "./Inputs/NewMeetup";
import photo from "./boardGame.jpg";

import React, { Component } from "react";

export class MeetupList extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    let meetups = this.props.meetups.map(meetup => {
      let meetupImageUrl;
      this.props.games
        .filter(game => game.name === meetup.game)
        .map(game => {
          return (meetupImageUrl = game.image_url);
        });

      return (
        <div key={meetup._id} className="meetupCard">
          <div className="imgDiv">
            {meetupImageUrl ? (
              <img alt="game" src={meetupImageUrl} />
            ) : (
              <img src={photo} alt="game" />
            )}
          </div>

          <div className="infoDiv">
            <h4 className="eventName">
              <Link to={`/meetup/id/${meetup._id}`}>{meetup.title}</Link>
            </h4>
            <p>
              <b>Creator:</b> {meetup.creator}
            </p>
            <p>
              <b>Game:</b> {meetup.game}
            </p>
            <p>
              <b>Date:</b> {meetup.date}
            </p>
            <p>
              <b>Time:</b> {meetup.time}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1 className="pageHeader">Game Meetups</h1>
        <NewMeetup getData={this.props.getData} />
        <div>{meetups}</div>
      </div>
    );
  }
}

export default MeetupList;
