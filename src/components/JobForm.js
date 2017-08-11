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

    this.handleInputChange = this.handleInputChange.bind(this)
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

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render(props) {
    return (
      <div style={formStyle}>
        <h2>Post a new job...</h2>
        <TextInput
          inputType={"text"}
          label={"Job Title"}
          name={"jobTitle"}
          content={this.state.jobTitle}
          changeHandler={this.handleInputChange} />
        <TextArea
          rows={10}
          resize={false}
          label={"Job Description"}
          name={"jobDetails"}
          content={this.state.jobDetails}
          changeHandler={this.handleInputChange} />
        <DropDownSelector
          label={"Category"}
          name={"categorySelection"}
          options={this.props.categoryOptions}
          placeholder={''}
          changeHandler={this.handleInputChange} />
        <TextInput
          type="text"
          label="City"
          name={"locationCity"}
          content={this.state.locationCity}
          changeHandler={this.handleInputChange} />
        <TextInput
          type="text"
          label="State"
          name={"locationState"}
          content={this.state.locationState}
          changeHandler={this.handleInputChange} />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    )
  }
}

export default JobForm;
