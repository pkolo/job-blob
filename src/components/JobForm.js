import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'

import { APIRoot, checkResponse, getJson } from '../modules/api'

import TextInput from './form/TextInput'
import TextArea from './form/TextArea'
import DropDownSelector from './form/DropDownSelector'
import ErrorMessageList from './ErrorMessageList'

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      jobDetails: '',
      categorySelection: '',
      locationCity: '',
      locationState: '',
      formMethod: 'POST',
      formURL: 'jobs',
      errorMessages: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentWillMount() {
    if (this.props.mode === 'edit') {
      const job = this.props.job
      this.setState({
        jobTitle: job.title,
        jobDetails: job.details,
        categorySelection: job.category.name,
        locationCity: job.location.city,
        locationState: job.location.state,
        formMethod: 'PUT',
        formURL: `jobs/${job.id}`
      })
    } else {
      this.clearForm()
    }
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.clearErrors()

    const jobPayload = {
      job: {
        title: this.state.jobTitle,
        details: this.state.jobDetails,
        category_name: this.state.categorySelection,
        location_attributes: {
          city: this.state.locationCity,
          state: this.state.locationState
        }
      }
    }

    fetch(APIRoot(this.state.formURL),
      {
        method: this.state.formMethod,
        body: JSON.stringify(jobPayload),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(getJson)
      .then(checkResponse)
      .then(json => this.props.stateUpdater(json.result))
      .then(this.clearForm())
      .catch(err => this.setState({ errorMessages: err.message }))
  }

  clearForm() {
    if (this.props.mode === 'edit') {
      this.props.toggleParentMode()
    } else {
      this.setState({
        jobTitle: '',
        jobDetails: '',
        categorySelection: '',
        locationCity: '',
        locationState: ''
      })
    }
  }

  clearErrors() {
    this.setState({ errorMessages: [] })
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
      <div className={css(styles.formContainer)}>
        <div className={css(styles.inputGroup)}>
          <TextInput
            inputType={"text"}
            label={"Job Title"}
            name={"jobTitle"}
            content={this.state.jobTitle}
            changeHandler={this.handleInputChange} />
          <DropDownSelector
            label={"Category"}
            name={"categorySelection"}
            options={this.props.categoryOptions}
            placeholder={''}
            selectedOption={this.state.categorySelection}
            changeHandler={this.handleInputChange} />
        </div>
        <TextArea
          rows={10}
          resize={false}
          label={"Job Description"}
          name={"jobDetails"}
          content={this.state.jobDetails}
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
        {this.props.mode === 'edit' &&
          <button onClick={this.props.toggleParentMode}>Cancel</button>}

        {this.state.errorMessages.length > 0 && <ErrorMessageList errors={this.state.errorMessages}/>}
      </div>
    )
  }
}

export default JobForm;

const styles = StyleSheet.create({
  formContainer: {
    padding: '15px',
    marginBottom: '10px',
    border: '1px solid black'
  },
  inputGroup: {
    boxSizing: 'border-box',
    boxOrient: 'horizontal',
    display: 'flex',
    flexDirection: 'row',
    flexPack: 'justify',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  }
});
