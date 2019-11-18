import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../actions/postActions";

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h1>add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </div>
          <div>
            <label>Body: </label>
            <br />
            <input
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></input>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
      </div>
    );
  }
}
Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
