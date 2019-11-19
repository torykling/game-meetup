import React, { Component } from "react";

export class DeleteMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // need to make sure we can grab the meetup id
      meetupId: this.props.match.params.id
    };
    this.handleClick = this.handleSubmit.bind(this);
  }
  handleClick = e => {
    e.preventDefault();
    const url = "urlpath/meetup" + this.state.meetupId;
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
