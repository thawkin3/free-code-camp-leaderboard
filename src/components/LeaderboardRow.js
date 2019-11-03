import React from 'react';
import './../stylesheets/LeaderboardRow.css';

const LeaderboardRow = (props) => (
  <tr>
    <td className="positionNumber">{props.index}</td>
    <td className="user">
      <p>{props.user.name} (<a href={`https://www.freecodecamp.com/${props.user.username}`}>{props.user.username}</a>)</p>
    </td>
    <td className="likesReceived">{props.likes_received}</td>
    <td className="likesGiven">{props.likes_given}</td>
    <td className="postCount">{props.post_count}</td>
  </tr>
);

export default LeaderboardRow;
