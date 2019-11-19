import React from "react";
import EditMeetup from "./Inputs/EditMeetup";
import DeleteMeetup from "./Inputs/DeleteMeetup";

export default function Meetup() {
  console.log("from meetup.js", this.props.match.params.id);
  let theMeetup;
  this.props.meetups.forEach(meetup => {
    if (meetup.id === this.props.match.params.id) {
      theMeetup = meetup;
      console.log(theMeetup);
    }
  });
  return (
    <div>
      <EditMeetup />
      <DeleteMeetup />
      <h1>{theMeetup.name}</h1>
    </div>
  );
}
