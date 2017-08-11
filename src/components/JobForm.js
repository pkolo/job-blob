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
      jobDetails: '',
      categorySelection: '',
      locationCity: '',
      locationState: ''
    }

    this.handleJobTitleChange = this.handleJobTitleChange.bind(this)
    this.handleJobDetailsChange = this.handleJobDetailsChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(e) {
    e.preventDefault()

    const jobPayload = {
      title: this.state.jobTitle,
      details: this.state.jobDetails,
      category_name: this.state.categorySelection,
      location_attributes: {
        city: this.state.locationCity,
        state: this.state.locationState
      }
    }

    console.log(jobPayload)
  }

  clearForm() {
    this.setState({
      jobTitle: '',
      jobDetails: '',
      categorySelection: '',
      locationCity: '',
      locationState: ''
    })
  }

  handleJobTitleChange(e) {
    this.setState({ jobTitle: e.target.value })
  }

  handleJobDetailsChange(e) {
    this.setState({ jobDetails: e.target.value })
  }

  handleCategoryChange(e) {
    this.setState({ categorySelection: e.target.value })
  }

  handleCityChange(e) {
    this.setState({ locationCity: e.target.value })
  }

  handleStateChange(e) {
    this.setState({ locationState: e.target.value })
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
          content={this.state.jobDetails}
          changeHandler={this.handleJobDetailsChange} />
        <DropDownSelector
          label={"Category"}
          name={"job[category_name]"}
          options={this.props.categoryOptions}
          placeholder={''}
          changeHandler={this.handleCategoryChange} />
        <TextInput
          type="text"
          label="City"
          name={"job[location_attributes][city]"}
          content={this.state.locationCity}
          changeHandler={this.handleCityChange} />
        <TextInput
          type="text"
          label="State"
          name={"job[location_attributes][state]"}
          content={this.state.locationState}
          changeHandler={this.handleStateChange} />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    )
  }
}

export default JobForm;
