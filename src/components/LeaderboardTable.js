import React, { Component } from 'react';
import LeaderboardRow from './LeaderboardRow';
import './../stylesheets/LeaderboardTable.css';

class LeaderboardTable extends Component {
  constructor(props) {
  		super(props);

  		this.createRows = this.createRows.bind(this);
  	}
    
  	createRows(showing) {
  		if (this.props.showing === "recent") {
  			return (
				this.props.recent.map((element, index) => {
					return <LeaderboardRow index={index+1} {...element} key={element.username} />
				})
			);
  		} else {
  			return (
				this.props.allTime.map((element, index) => {
					return <LeaderboardRow index={index+1} {...element} key={element.username} />
				})
			);
  		}
  	}

  render() {
    return (
        <table className="LeaderboardTable table table-striped">
        	<thead>
        		<tr>
        			<th className="positionNumber">#</th>
					<th className="user">Username</th>
					<th className={"pointsLast30Days showOption " + (this.props.showing === "recent" ? "selected" : "")} onClick={() => this.props.changeShowing("recent")}>Points in the Last 30 Days</th>
					<th className={"pointsAllTime showOption " + (this.props.showing === "allTime" ? "selected" : "")} onClick={() => this.props.changeShowing("allTime")}>All Time Points</th>
        		</tr>
        	</thead>
        	<tbody>
        		{ this.createRows(this.props.showing) }
        	</tbody>
        </table>
    );
  }
}

export default LeaderboardTable;
