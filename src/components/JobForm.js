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
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      jobDescription: '',
      categoryOptions: [],
      categorySelection: '',
      locationCity: '',
      locationState: ''
    }
  }

  render() {
    return (
      <div style={formStyle}>
        <h2>Post a new job...</h2>
        <TextInput label="Job Title" name="job[title]"/>
        <TextArea label="Job Description" name="job[details]"/>
        <DropDownSelector label="Category" name="job[category_name]"/>
        <TextInput label="City" name="job[location_attributes][city]"/>
        <TextInput label="State" name="job[location_attributes][state]"/>
      </div>
    )
  }
}

export default JobForm;
