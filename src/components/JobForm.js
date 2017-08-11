import React, { Component } from 'react';

import TextInput from './form/TextInput'
import TextArea from './form/TextArea'
import DropDownSelector from './form/DropDownSelector'

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
        <TextInput label="Job Title" />
        <TextArea label="Job Description" />
      </div>
    )
  }
}

export default JobForm;
