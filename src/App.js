import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Meetup from "./components/Meetup";
import MeetupList from "./components/MeetupList";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: null, meetups: null };
    this.getGames = this.getGames.bind(this);
  }
  componentDidMount() {
    axios
      .get("url/meetups")
      .then(res => {
        this.setState({ meetups: res.data });
      })
      .catch(err => console.log(err));
    this.getGames();
  }

  getGames() {
    axios
      .get("url/games")
      .then(res => {
        this.setState({ games: res.data });
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
