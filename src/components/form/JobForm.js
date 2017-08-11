import React, { Component } from 'react';

const formStyle = {
  width: '600px',
  float: 'right',
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid black'
};

class JobForm extends Component {
  render() {
    return (
      <div style={formStyle}>
        This is a form
      </div>
    )
  }
}

export default JobForm;
