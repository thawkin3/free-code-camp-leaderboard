import React from 'react';
import './../stylesheets/ViewToggle.css';

const ViewToggle = (props) => (
  <div className="ViewToggle">
    <span>Currently Showing: </span>
    <span className={'recent showOption ' + (props.period === 'MONTHLY' ? 'selected' : '')} onClick={() => props.changePeriod('MONTHLY')}>Last 30 Days</span>
    <span> | </span>
    <span className={'allTime showOption ' + (props.period === 'ALL' ? 'selected' : '')} onClick={() => props.changePeriod('ALL')}>All Time</span>
  </div>
)

export default ViewToggle;
