// import React from "react";
import { Link } from "react-router-dom";
import NewMeetup from "./Inputs/NewMeetup";

import React, { Component } from "react";

export class MeetupList extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    let meetups = this.props.meetups.map(meetup => {
      return (
        <div key={meetup._id}>
          <Link to={`/meetup/id/${meetup._id}`}>{meetup.title}</Link>
          <h6>{meetup.creator}</h6>
          <h6>{meetup.game}</h6>
          <h6>{meetup.date}</h6>
          <h6>{meetup.time}</h6>
          <img src={meetup.image_url}></img>
        </div>
      );
    });

    return (
      <div>
        <h1>Game Meetups</h1>
        <NewMeetup getData={this.props.getData} />
        <div>{meetups}</div>
      </div>
    );
  }
}

export default MeetupList;
