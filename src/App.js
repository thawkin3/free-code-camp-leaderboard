import React, { Component } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import ErrorNotice from './components/ErrorNotice';
import ViewToggle from './components/ViewToggle';
import LeaderboardTable from './components/LeaderboardTable';
import './stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaderboardData: [],
      period: 'ALL',
      fetchStatus: 'UNSENT'
    };

    this.getLeadersForAllTime = this.getLeadersForAllTime.bind(this);
    this.getLeadersForLast30Days = this.getLeadersForLast30Days.bind(this);
    this.changePeriod = this.changePeriod.bind(this);
  }

  componentDidMount() {
    this.getLeadersForAllTime();
  }

  getLeadersForAllTime() {
    this.setState({ fetchStatus: 'LOADING' });
    axios.get('https://cors-anywhere.herokuapp.com/http://www.freecodecamp.org/forum/directory_items.json?period=all&order=likes_received')
      .then(res => {
        this.setState({ leaderboardData: res.data.directory_items, period: 'ALL', fetchStatus: 'DONE' });
      })
      .catch(error => {
        this.setState({ leaderboardData: [], period: 'ALL', fetchStatus: 'ERROR' });
      });
  }

  getLeadersForLast30Days() {
    this.setState({ fetchStatus: 'LOADING' });
    axios.get('https://cors-anywhere.herokuapp.com/http://www.freecodecamp.org/forum/directory_items.json?period=monthly&order=likes_received')
      .then(res => {
        this.setState({ leaderboardData: res.data.directory_items, period: 'MONTHLY', fetchStatus: 'DONE' });
      })
      .catch(error => {
        this.setState({ leaderboardData: [], period: 'MONTHLY', fetchStatus: 'ERROR' });
      });
  }

  changePeriod(period) {
    period === 'ALL' ? this.getLeadersForAllTime() : this.getLeadersForLast30Days();
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
              {(this.state.leaderboardData.length > 0 && this.state.fetchStatus === 'DONE') ? (
                <div>
                  <ViewToggle
                    period={this.state.period}
                    changePeriod={this.changePeriod}
                  />
                  <LeaderboardTable data={this.state.leaderboardData} />
                </div>
              ) : this.state.fetchStatus === 'ERROR' ? (
                <ErrorNotice />
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
                <p>Check out the rest of my portfolio <a href="http://tylerhawkins.info">here</a></p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
