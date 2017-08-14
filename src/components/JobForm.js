import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite'
import { width, colors } from '../styles/shared'

import { APIRoot, checkResponse, getJson } from '../modules/api'

import TextInput from './form/TextInput'
import TextArea from './form/TextArea'
import DropDownSelector from './form/DropDownSelector'
import Button from './form/Button'
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
      showFullForm: false,
      formMethod: 'POST',
      formURL: 'jobs',
      errorMessages: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleCancelButton = this.handleCancelButton.bind(this)
    this.showFullForm = this.showFullForm.bind(this)
    this.hideFullForm = this.hideFullForm.bind(this)
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
        showFullForm: true,
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
      .then(json => {this.props.stateUpdater(json.result); this.clearForm()})
      .catch(err => {this.setState({ errorMessages: err.message }); this.clearForm()})
  }

  clearForm() {
    let errors = (this.state.errorMessages.length > 0)
    if (this.props.mode === 'edit' && !errors) {
      this.props.toggleParentMode()
    } else {
      this.setState({
        jobTitle: '',
        jobDetails: '',
        categorySelection: '',
        locationCity: '',
        locationState: '',
      })

      if (!errors) {
        this.setState({showFullForm: false})
      }
    }
  }

  clearErrors() {
    this.setState({ errorMessages: [] })
  }

  showFullForm(e) {
    this.setState({ showFullForm: true })
  }

  hideFullForm(e) {
    this.setState({ showFullForm: false })
  }

  handleCancelButton(e) {
    if (this.props.mode === 'create') {
      this.clearErrors()
      this.hideFullForm()
    } else {
      this.props.toggleParentMode(e)
    }
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
        <div className={css(styles.inputRow)}>
          <TextInput
            required={true}
            type={"text"}
            label={'What do you need done?'}
            placeholder={'I need a catsitter...'}
            name={"jobTitle"}
            content={this.state.jobTitle}
            width={width.large}
            changeHandler={this.handleInputChange}
            focusHandler={this.showFullForm} />
          <DropDownSelector
            required={true}
            label={"Category"}
            name={"categorySelection"}
            options={this.props.categoryOptions}
            placeholder={''}
            selectedOption={this.state.categorySelection}
            width={width.small}
            changeHandler={this.handleInputChange} />
        </div>
        { this.state.showFullForm &&
          <div>
            <div className={css(styles.inputRow)}>
              <TextArea
                required={true}
                rows={5}
                label={"Anything you'd like to add?"}
                placeholder={'The more details the better. No personal info, please...'}
                name={"jobDetails"}
                content={this.state.jobDetails}
                width={width.full}
                changeHandler={this.handleInputChange} />
            </div>
            <div className={css(styles.inputRow, width.medium)}>
              <TextInput
                required={true}
                type="text"
                label="City"
                placeholder={'City'}
                name={"locationCity"}
                content={this.state.locationCity}
                changeHandler={this.handleInputChange} />
              <TextInput
                required={true}
                type="text"
                label="State"
                placeholder={'State'}
                name={"locationState"}
                content={this.state.locationState}
                changeHandler={this.handleInputChange} />
            </div>
            <div className={css(styles.inputRow)}>
              <div className={css(styles.errorContainer)}>
                {this.state.errorMessages.length > 0 && <ErrorMessageList errors={this.state.errorMessages}/>}
              </div>
              <div className={css(styles.buttonContainer)}>
                <Button label={'Post Job'} handleClick={this.handleFormSubmit} />
                <Button label={'Cancel'} handleClick={this.handleCancelButton} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default JobForm;

const styles = StyleSheet.create({
  formContainer: {
    padding: '15px',
    marginBottom: '10px',
    border: `1px solid ${colors.darkGrey}`
  },
  inputRow: {
    boxSizing: 'border-box',
    boxOrient: 'horizontal',
    display: 'flex',
    flexDirection: 'row',
    flexPack: 'justify',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginLeft: 'auto'
  },
  errorContainer: {
    marginRight: 'auto',
    padding: '10px'
  }
});
