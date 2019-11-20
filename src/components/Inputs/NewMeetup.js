import React, { Component } from "react";
import axios from "axios";

export class NewMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      game: null,
      date: null,
      time: null,
      creator: null,
      location: null,
      message: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value.trim() });
  };
  onSubmit = e => {
    e.preventDefault();

    axios
      .post("https://game-meetup-api.herokuapp.com/meetup", {
        title: this.state.title,
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
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          placeholder="Title"
        />
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
          placeholder="date (mm-dd-yyyy)"
        />
        <input
          type="text"
          name="time"
          onChange={this.handleChange}
          placeholder="time (e.g 4:00pm)"
        />
        <input
          type="text"
          name="creator"
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
        <input type="submit" />
      </form>
    );
  }
}

export default NewMeetup;
