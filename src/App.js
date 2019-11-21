import React, { Component } from "react";
import "./App.css";
import "./Reset.css";
import { Route, Link } from "react-router-dom";
import Meetup from "./components/Meetup";
import MeetupList from "./components/MeetupList";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { games: null, meetups: null };
    this.getData = this.getData.bind(this);
    this.doThisWhileLoading = this.doThisWhileLoading.bind(this);
    // this.editMeetupsByDate = this.editMeetupsByDate.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  doThisWhileLoading = () => {
    if (this.state.games !== null && this.state.meetups !== null) {
      return <MeetupList getData={this.getData} {...this.state} />;
    } else {
      return <h1 className="pageHeader">Loading...</h1>;
    }
  };
  getData = () => {
    axios
      .get("https://game-meetup-api.herokuapp.com/")
      .then(res => {
        this.setState({ meetups: res.data });
        // console.log(res.data);
        // this.editMeetupsByDate();
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
  // editMeetupsByDate = () => {
  //   let today = new Date();
  //   const allMeetups = this.state.meetups;
  //   const relevantMeetups = allMeetups.filter(meetup => {
  //     return meetup.date >= today;
  //   });
  //   this.setState({ meetups: relevantMeetups });
  // };
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
