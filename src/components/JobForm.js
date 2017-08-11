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
      categorySelection: '',
      locationCity: '',
      locationState: ''
    }

    this.handleJobTitleChange = this.handleJobTitleChange.bind(this)
  }

  handleJobTitleChange(e) {
    this.setState({ jobTitle: e.target.value })
  }

  render(props) {
    return (
      <div style={formStyle}>
        <h2>Post a new job...</h2>
        <TextInput
          inputType={"text"}
          label={"Job Title"}
          name={"job[title]"}
          content={this.state.jobTitle}
          changeHandler={this.handleJobTitleChange} />
        <TextArea
          rows={10}
          resize={false}
          label={"Job Description"}
          name={"job[details]"}
          content={this.state.jobDetails} />
        <DropDownSelector
          label={"Category"}
          name={"job[category_name]"}
          options={this.props.categoryOptions} />
        <TextInput
          type="text"
          label="City"
          name={"job[location_attributes][city]"}
          content={this.state.locationCity} />
        <TextInput
          type="text"
          label="State"
          name={"job[location_attributes][state]"}
          content={this.state.locationState} />
      </div>
    )
  }
}

export default JobForm;
