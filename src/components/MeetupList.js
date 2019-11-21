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
            <Link to={`/meetup/id/${meetup._id}`}>
              {meetupImageUrl ? (
                <img alt="game" src={meetupImageUrl} />
              ) : (
                <img src={photo} alt="game" />
              )}
            </Link>
          </div>

          <div className="infoDiv">
            <h4>
              <Link to={`/meetup/id/${meetup._id}`} className="eventName">{meetup.title}</Link>
            </h4>
            <div className="info">
              <p className="bold">Creator</p> {meetup.creator}
            </div>
            <div className="info">
              <p className="bold">Game</p> {meetup.game}
            </div>
            <div className="info">
              <p className="bold">Date</p> {meetup.date}
            </div>
            <div className="info">
              <p className="bold">Time</p> {meetup.time}
            </div>
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
