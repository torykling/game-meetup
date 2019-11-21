## Board Game Meetups!

### Description
This application is called bgm, or Board Game Meetups. The idea is to be able to create events centered around a specific game and sign up with a location (using the Google Maps API) in mind so you and your friends can meet up and play! This was the result of a group project completed during the Software Engineering Immersive program at General Assembly in a couple days. The back end of this project involving our board game API and routing can be found [in this directory.](https://github.com/shelbyvjacobs/game-meetup-api) 

[DEPLOYED VERSION](https://lucid-noether-312707.netlify.com/)

#### Team Members 
- [Tory Klingenstein](https://github.com/torykling)
- [Dallas Lind](https://github.com/DallasLind)
- [Shelby Jacobs](https://github.com/shelbyvjacobs)

### Usage
Simply input the event you'd like to set up in the form available on the front page! Below that form on the front page will be other events people have created. Click on an established event to see the name of who created it, the game they'll play, and who is attending. For the location, there doesn't need to be an exact address for the location, so long as Google Maps understands where you'd like to go. On the specific event page itself, there'll be more informaton about the game of choice with a description along with either an official website or the Board Game Atlas website.

### Approach 
Since this was a group project, we wanted to take an approach that would complement our skillsets. With this project, we wanted to focus on making an elegantly styled site that ran smoothly with user consideration in mind. Our big goal was to ensure CRUD functionality was performing smoothly in React. We also chose to implement components through Storybook into our visual design. That repo can be found [here](https://github.com/shelbyvjacobs/game-meetup-component-library).

### Screenshots
![](https://i.imgur.com/SEIoKS6.png)
![](https://i.imgur.com/WMvmn05.png)

### Build Status
![](https://img.shields.io/badge/BUILD-IN%20PROGRESS-informational)

Currently attempting to fix some minor features such as description showing up and styling. 

### Future Goals
* Add authentication features
* Possibly adjust some styling aspects regarding the map
* Update the API with more games or set up a feature where people can add games to the API

### Technologies Used
* Node.js
* Mongoose
* MongoDB
* React 
* Express
* Storybook

### Installation Directions
1. Fork the directory to your personal Github account
2. Git clone from their to your CLI
3. From the CLI, run `npm install` from the root directory of the project to install the required dependencies  (If you're running in from your local machine, you can run the command `npm start` from the project directory instead to run the Node JS server.)

### Contribution Guidelines
If you would to contribute or notify us of any issues, potential improvements, or otherwise, please do so! Feel free to fork this repository and use the issue tracker to notify us of any potential updates we should do.

* [Board Game Meetup Repo](https://github.com/torykling/game-meetup)
* [Issue Track for this Repo](https://github.com/torykling/game-meetup/issues)
