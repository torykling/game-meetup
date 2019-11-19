import React, { Component } from "react";
import axios from "axios";

export class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // make sure we can grab this meetupId
      meetupId: this.props.match.params.id,
      game: null,
      date: null,
      time: null,
      name: null,
      location: null,
      message: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const url = "url/meetup" + this.state.meetupId;
    axios
      .put(url, {
        game: this.state.game,
        date: this.state.date,
        time: this.state.time,
        name: this.state.name,
        location: this.state.location,
        message: this.state.message
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="game"
          onChange={this.handleChange}
          placeholder="Game"
        />
        <input
          type="text"
          name="date"
          onChange={this.handleChange}
          placeholder="date (mm/dd/yyyy)"
        />
        <input
          type="text"
          name="time"
          onChange={this.handleChange}
          placeholder="time (e.g 4:00pm)"
        />
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Creator Name"
        />
        <input
          type="text"
          name="location"
          onChange={this.handleChange}
          placeholder="address"
        />
        <input
          type="text"
          name="message"
          onChange={this.handleChange}
          placeholder="message (e.g. Come to this fun meetup to play Scrabble!)"
        />
      </form>
    );
  }
}

export default EditMeetup;
