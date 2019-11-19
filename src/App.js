import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Meetup from "./components/Meetup";
import MeetupList from "./components/MeetupList";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: null, meetups: null };
  }
  componentDidMount() {
    axios
      .get("https://game-meetup-api.herokuapp.com/")
      .then(res => {
        this.setState({ meetups: res.data });
        // console.log(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get("https://game-meetup-api.herokuapp.com/games")
      .then(res => {
        this.setState({ games: res.data });
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <nav>
          <Link className="home" to="/">
            Home
          </Link>
        </nav>
        <div className="content-wrap">
          <Route
            path="/"
            exact
            render={routerProps => (
              <MeetupList {...routerProps} {...this.state} />
            )}
          />
          <Route
            path="/meetup/:id"
            exact
            render={routerProps => <Meetup {...routerProps} {...this.state} />}
          />
        </div>
        <footer className="footer">
          Data for Games API gathered from{" "}
          <a className="a" href="#" target="_blank" rel="noopener noreferrer">
            Games API
          </a>
        </footer>
      </div>
    );
  }
}
