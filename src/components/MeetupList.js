import React from "react";
import { Link } from "react-router-dom";
import NewMeetup from "./Inputs/NewMeetup";

export default function MeetupList(props) {
  console.log(props);
  let meetups = props.meetups.map(meetup => {
    return (
      <div key={meetup._id}>
        <Link to={`/meetup/id/${meetup._id}`}>{meetup.game}</Link>
      </div>
    );
  });
  return (
    <div>
      <h1>hi</h1>
      <NewMeetup />
      <div>{meetups}</div>
    </div>
  );
}
