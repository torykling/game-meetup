import React, { Component } from "react";
import axios from "axios";

export class JoinMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetupId: this.props.match.params.id,
      name: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };
  handleSubmit = e => {
    e.preventDefault();
    const url =
      "https://game-meetup-api.herokuapp.com/meetup/attendees/id/" +
      this.state.meetupId;
    axios
      .put(url, {
        attendees: this.state.name
      })
      .then(res => {
        console.log(res);
        this.props.getData();
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={this.handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    );
  }
}

export default JoinMeetup;
