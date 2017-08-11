import React, { Component } from 'react';

const barStyle = {
  float: 'left',
  width: '300px',
  border: '1px solid black',
  padding: '15px'
}

class BrowseBar extends Component {
  render() {
    return(
      <div style={barStyle}>
        <h3>Browse Jobs</h3>
      </div>
    )
  }
}

export default BrowseBar;
