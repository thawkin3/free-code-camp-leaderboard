import React from 'react';
import './../stylesheets/LeaderboardRow.css';

const LeaderboardRow = (props) => {
  return (
    <tr>
      <td className="positionNumber">{props.index}</td>
      <td className="user">
        <img className="avatar" src={props.img} alt={props.img} title={props.img} />
        <a href={`https://www.freecodecamp.com/${props.username}`}>{props.username}</a>
      </td>
      <td className="pointsLast30Days">{props.recent}</td>
      <td className="pointsAllTime">{props.alltime}</td>
    </tr>
  );
}

export default LeaderboardRow;
