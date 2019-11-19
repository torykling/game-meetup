import React from "react";
import EditMeetup from "./Inputs/EditMeetup";
import DeleteMeetup from "./Inputs/DeleteMeetup";

export default function Meetup(props) {
  console.log("from meetup.js", props.match.params.id);
  let theMeetup;
  props.meetups.forEach(meetup => {
    if (meetup.id === props.match.params.id) {
      theMeetup = meetup;
      console.log(theMeetup);
    }
  });
  let theGame;
  for (let i = 0; i < props.games.length; i++) {
    if (theMeetup.game === props.games[i].name) {
      theGame = props.games[i];
    }
  }
  return (
    <div>
      {/* <EditMeetup /> */}
      {/* <DeleteMeetup /> */}
      <h1>{theMeetup.name}</h1>
      <h1>{theGame.name}</h1>
    </div>
  );
}
