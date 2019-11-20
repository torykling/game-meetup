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
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  doThisWhileLoading = () => {
    if (this.state.games !== null && this.state.meetups !== null) {
      return <MeetupList getData={this.getData} {...this.state} />;
    } else {
      return <h1>Loading...</h1>;
    }
  };
  getData = () => {
    axios
      .get("https://game-meetup-api.herokuapp.com/")
      .then(res => {
        this.setState({ meetups: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get("https://game-meetup-api.herokuapp.com/games")
      .then(res => {
        this.setState({ games: res.data });
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <nav>
          <Link className="home" to="/">
            Home
          </Link>
        </nav>
        <div className="content-wrap">
          <Route path="/" exact render={this.doThisWhileLoading}></Route>
          <Route
            path="/meetup/id/:id"
            exact
            render={routerProps => (
              <Meetup getData={this.getData} {...routerProps} {...this.state} />
            )}
          />
        </div>
        <footer className="footer">
          Data for Games API gathered from{" "}
          <a
            className="a"
            href="https://www.boardgameatlas.com/api/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Board Game Atlas
          </a>
        </footer>
      </div>
    );
  }
}
