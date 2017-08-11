import React, { Component } from 'react';

const jobStyle = {
  width: '600px',
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid black'
};

class Job extends Component {

  render(props) {
    return (
      <div style={jobStyle}>
        <p>Anything</p>
      </div>
    )
  }
}

export default Job;
