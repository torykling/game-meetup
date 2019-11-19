import React, { Component } from "react";
import axios from "axios";

export class DeleteMeetup extends Component {
  constructor(props) {
    console.log(props.match.params.id);
    super(props);
    this.state = {
      // need to make sure we can grab the meetup id
      meetupId: this.props.match.params.id
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = e => {
    e.preventDefault();
    const url =
      "https://game-meetup-api.herokuapp.com/meetup/id/" +
      this.props.match.params.id;
    axios
      .delete(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <form onSubmit={this.handleClick}>
        <input type="submit" value="Delete this meetup"></input>
      </form>
    );
  }
}

export default DeleteMeetup;
