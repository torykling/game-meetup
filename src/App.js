import React, { Component } from "react";
import "./App.css";
import "./Reset.css";
import { Route } from "react-router-dom";
import Meetup from "./components/Meetup";
import MeetupList from "./components/MeetupList";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import axios from "axios";

let baseUrl = window.location.host.includes("localhost")
  ? "localhost:6080"
  : "https://game-meetup-api.herokuapp.com";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: [], meetups: [] };
    this.getData = this.getData.bind(this);
    this.doThisWhileLoading = this.doThisWhileLoading.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  doThisWhileLoading = () => {
    if (this.state.games.length !== 0 && this.state.meetups.length !== 0) {
      return <MeetupList getData={this.getData} {...this.state} />;
    } else {
      return <h1 className="pageHeader">Loading...</h1>;
    }
  };
  getData = () => {
    console.log("getting data");
    axios
      .get(baseUrl)
      .then(res => {
        this.setState({ meetups: res.data }, () => console.log("got meetups"));
      })
      .catch(err => console.log(err));
    axios
      .get(`${baseUrl}/games`)
      .then(res => {
        this.setState({ games: res.data }, () => console.log("got games"));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div className="content-wrap">
          <div className="child">
            <Route path="/" exact render={this.doThisWhileLoading}></Route>
            <Route
              path="/meetup/id/:id"
              exact
              render={routerProps => (
                <Meetup
                  getData={this.getData}
                  {...routerProps}
                  {...this.state}
                />
              )}
            />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
