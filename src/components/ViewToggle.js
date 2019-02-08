import React, { Component } from 'react';
import './../stylesheets/ViewToggle.css';

class ViewToggle extends Component {
  render() {
    return (
        <div className="ViewToggle">
            <span>Currently Showing: </span>
            <span className={"recent showOption " + (this.props.showing === "recent" ? "selected" : "")} onClick={() => this.props.changeShowing("recent")}>Last 30 Days</span>
            <span> | </span>
            <span className={"allTime showOption " + (this.props.showing === "allTime" ? "selected" : "")} onClick={() => this.props.changeShowing("allTime")}>All Time</span>
        </div>
    );
  }
}

export default ViewToggle;
