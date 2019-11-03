import React from 'react';
import LeaderboardRow from './LeaderboardRow';
import './../stylesheets/LeaderboardTable.css';

const LeaderboardTable = (props) => (
  <table className="LeaderboardTable table table-striped">
    <thead>
      <tr>
        <th className="positionNumber">#</th>
        <th className="user">Username</th>
        <th className="likesReceived">Likes Received</th>
        <th className="likesGiven">Likes Given</th>
        <th className="postCount">Post Count</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((element, index) => {
        return <LeaderboardRow index={index + 1} {...element} key={element.id} />
      })}
    </tbody>
  </table>
);

export default LeaderboardTable;
