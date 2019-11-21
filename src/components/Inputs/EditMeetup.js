import React, { Component } from "react";
import axios from "axios";
import DeleteMeetup from "./DeleteMeetup";

export class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetupId: this.props.match.params.id,
      title: props.meetup.title,
      game: props.meetup.game,
      date: props.meetup.date,
      time: props.meetup.time,
      creator: props.meetup.creator,
      location: props.meetup.location,
      description: props.meetup.description
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.trim() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://game-meetup-api.herokuapp.com/meetup/id/" + this.state.meetupId;
    axios
      .put(url, {
        title: this.state.title,
        game: this.state.game,
        date: this.state.date,
        time: this.state.time,
        creator: this.state.creator,
        location: this.state.location,
        description: this.state.description
      })
      .then(res => {
        console.log(res);
        this.props.getData();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="editMeetup">
          <button className="accordion">Edit This Meetup</button>
          <div className="panel">
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              placeholder="Title"
              className="textInput"
            />
            <input
              type="text"
              name="game"
              onChange={this.handleChange}
              placeholder="Game"
              className="textInput"
            />
            <input
              type="text"
              name="date"
              onChange={this.handleChange}
              placeholder="Date (mm-dd-yyyy)"
              className="textInput"
            />
            <input
              type="text"
              name="time"
              onChange={this.handleChange}
              placeholder="Time (e.g 4:00pm)"
              className="textInput"
            />
            <input
              type="text"
              name="creator"
              onChange={this.handleChange}
              placeholder="Creator Name"
              className="textInput"
            />
            <input
              type="text"
              name="location"
              onChange={this.handleChange}
              placeholder="Address"
              className="textInput"
            />
            <input
              type="text"
              name="description"
              onChange={this.handleChange}
              placeholder="Meetup Description (e.g. Come to this fun meetup to play Scrabble!)"
              className="textInput"
            />
            <input type="submit" className="button panel" value="Edit this Meetup" />
          </div>
        </form>
        <DeleteMeetup {...this.props} />
      </div>
    );
  }
}

export default EditMeetup;
