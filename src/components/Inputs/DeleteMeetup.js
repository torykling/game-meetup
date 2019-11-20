import React, { Component } from "react";
import axios from "axios";

export class DeleteMeetup extends Component {
  constructor(props) {
    console.log(props.match.params.id);
    super(props);
    this.state = {
      meetupId: this.props.match.params.id,
      isDeleted: false
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
        this.setState({ isDeleted: true });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        {this.isDeleted ? <h1>This meetup has been deleted.</h1> : " "}
        <form onSubmit={this.handleClick}>
          <input type="submit" value="Delete this meetup"></input>
        </form>
      </div>
    );
  }
}

export default DeleteMeetup;
