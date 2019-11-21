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
      description: null
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
      <form onSubmit={this.onSubmit} className="newMeetup">
        <button className="accordion">Create a Meetup</button>
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
            placeholder="Description (e.g. Come to this fun meetup to play Scrabble!)"
            className="textInput"
          />
          <input type="submit" className="button" />
        </div>
      </form>
    );
  }
}

export default NewMeetup;
