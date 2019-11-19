import React from "react";
import EditMeetup from "./Inputs/EditMeetup";
import DeleteMeetup from "./Inputs/DeleteMeetup";

export default function Meetup(props) {
  let theMeetup;

  props.meetups.forEach(meetup => {
    if (meetup._id === props.match.params.id) {
      theMeetup = meetup;
      console.log(theMeetup);
    }
  });
  let theGame;
  props.games.forEach(game => {
    if (theMeetup.game === game.name) {
      theGame = game;
      console.log(theGame);
    }
  });

  return (
    <div>
      <EditMeetup {...props} />
      <DeleteMeetup {...props} />
      <div className="MeetupInfo">
        <h1>{theMeetup.creator}</h1>
      </div>
      {theGame !== undefined ? (
        <div className="GameInfo">
          <h1>{theGame.name}</h1>
          <img src={`${theGame.image_url}`} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
