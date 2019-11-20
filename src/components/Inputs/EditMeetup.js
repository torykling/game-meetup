import React, { Component } from "react";
import axios from "axios";

export class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetupId: this.props.match.params.id,
      title: null,
      game: null,
      date: null,
      time: null,
      creator: null,
      location: null,
      message: null
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
        game: this.state.game,
        date: this.state.date,
        time: this.state.time,
        creator: this.state.creator,
        location: this.state.location,
        message: this.state.message
      })
      .then(res => {
        console.log(res);
        this.props.getData();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="editMeetup">
        <h2 className="formHeader">Edit This Meetup</h2>
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
          placeholder="date (mm-dd-yyyy)"
          className="halfTextInput"
        />
        <input
          type="text"
          name="time"
          onChange={this.handleChange}
          placeholder="time (e.g 4:00pm)"
          className="halfTextInput"
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
          placeholder="address"
          className="textInput"
        />
        <input
          type="text"
          name="message"
          onChange={this.handleChange}
          placeholder="message (e.g. Come to this fun meetup to play Scrabble!)"
          className="textInput"
        />
        <input type="submit" className="button"/>
      </form>
    );
  }
}

export default EditMeetup;
