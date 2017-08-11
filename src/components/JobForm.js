import React, { Component } from 'react';

import TextInput from './form/TextInput'
import TextArea from './form/TextArea'

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
        <TextInput label="Title" />
        <TextArea label="Job Details" />
      </div>
    )
  }
}

export default JobForm;
