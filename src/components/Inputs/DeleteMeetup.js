import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
    if (this.state.isDeleted) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <form onSubmit={this.handleClick} className="editMeetup">
          <button className="accordion">Delete This Meetup</button>
          <div className="panel">
            <p className="warning">Be careful! This action can't be undone.</p>
            <input type="submit" value="Delete this Meetup" className="button panel"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteMeetup;
