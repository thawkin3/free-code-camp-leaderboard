import React, { Component } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import ViewToggle from './components/ViewToggle';
import LeaderboardTable from './components/LeaderboardTable';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topUsersAllTime: [],
      topUsersLast30Days: [],
      showing: "recent"
    }

    this.changeShowing = this.changeShowing.bind(this);

  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => {
        this.setState({ topUsersLast30Days: res.data });
      })
      .catch(error => {
        this.setState({ topUsersLast30Days: [] });
        console.log(error);
      });

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(res => {
        this.setState({ topUsersAllTime: res.data });
      })
      .catch(error => {
        this.setState({ topUsersAllTime: [] });
        console.log(error);
      });
  }

  changeShowing(val) {
    this.setState({
      showing: val
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <header className="App-header">
                <h1 className="App-title">FreeCodeCamp Leaderboard</h1>
              </header>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              { (this.state.topUsersAllTime.length > 0 && this.state.topUsersAllTime.length > 0) ? (
                <div>
                  <ViewToggle showing={this.state.showing} changeShowing={this.changeShowing} />
                  <LeaderboardTable allTime={this.state.topUsersAllTime}
                  recent={this.state.topUsersLast30Days} showing={this.state.showing}
                  changeShowing={this.changeShowing} />
                </div>
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <footer className="App-footer">
                <p>Created by Tyler Hawkins</p>
                <p>Check out the rest of my portfolio <a href="http://ec2-54-200-192-157.us-west-2.compute.amazonaws.com/201R/">here</a></p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
