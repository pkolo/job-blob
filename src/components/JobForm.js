import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as jobActions from '../actions/jobActions'
import { StyleSheet, css } from 'aphrodite'
import { width, colors } from '../styles/shared'
import { stateData } from '../modules/stateData'
import TextInput from './form/TextInput'
import TextArea from './form/TextArea'
import Button from './form/Button'
import Flash from './form/Flash'
import DropDownSelector from './form/DropDownSelector'

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
      errorMessages: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFlash = this.handleFlash.bind(this)
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
        categorySelection: job.category.id,
        locationCity: job.location.city,
        locationState: job.location.state,
        showFullForm: true
      })
    } else {
      this.clearForm()
    }
  }

  handleSubmit(e) {
    this.clearErrors()

    let category = this.props.menuOptions.find((cat) => cat.id === parseInt(this.state.categorySelection, 10))

    const jobPayload = {
      job: {
        title: this.state.jobTitle,
        details: this.state.jobDetails,
        category_name: category ? category.name : null,
        location_attributes: {
          city: this.state.locationCity,
          state: this.state.locationState
        }
      }
    }

    if (this.props.mode === 'create') {
      this.props.actions.createJob(jobPayload)
    } else {
      this.props.actions.updateJob(jobPayload, this.props.id)
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

  clearForm() {
    let errors = (this.state.errorMessages.length > 0)

    if (this.props.mode === 'edit' && !errors) {
      this.props.toggleParentMode()
    } else if (!errors) {
      this.setState({
        jobTitle: '',
        jobDetails: '',
        categorySelection: '',
        locationCity: '',
        locationState: '',
        showFullForm: false
      })
    }
  }

  clearErrors() {
    this.setState({ errorMessages: [] })
  }

  handleFlash(e) {
    this.clearErrors()
  }

  handleCancelButton(e) {
    if (this.props.mode === 'create') {
      this.clearErrors()
      this.hideFullForm()
    } else {
      this.props.toggleParentMode(e)
    }
  }

  showFullForm(e) {
    this.setState({ showFullForm: true })
  }

  hideFullForm(e) {
    this.setState({ showFullForm: false })
  }

  render(props) {
    return (
      <div className={css(styles.formContainer)}>
        {this.state.errorMessages.length > 0 && <Flash messages={this.state.errorMessages} clickHandler={this.handleFlash} />}
        <div className={css(styles.inputRow, styles.smallInputRow)}>
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
            options={this.props.menuOptions}
            optionNameFormatter={this.props.optionNameFormatter}
            placeholder={''}
            selectedOption={this.state.categorySelection}
            width={width.small}
            changeHandler={this.handleInputChange} />
        </div>
        { this.state.showFullForm &&
          <div>
            <div className={css(styles.inputRow, styles.smallInputRow)}>
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
            <div className={css(styles.inputRow, width.medium, styles.smallInputRow)}>
              <TextInput
                required={true}
                type="text"
                label="City"
                placeholder={'City'}
                name={"locationCity"}
                content={this.state.locationCity}
                changeHandler={this.handleInputChange} />
              <DropDownSelector
                required={true}
                label="State"
                name={"locationState"}
                options={stateData}
                optionNameFormatter={(state) => state.name}
                placeholder={''}
                selectedOption={this.state.locationState}
                changeHandler={this.handleInputChange} />
            </div>
            <div className={css(styles.inputRow)}>
              <div className={css(styles.buttonContainer)}>
                <Button label={'Post Job'} handleClick={this.handleSubmit} />
                <Button label={'Cancel'} handleClick={this.handleCancelButton} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let job = {title: '', details: '', date_posted: '', category: {id: '', name: ''}, location: {city: '', state: ''}};
  if (ownProps.id) {
    job = Object.assign({}, state.jobs.find(job => job.id === ownProps.id))
  }
  return {job: job};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    padding: '15px',
    marginBottom: '10px',
    border: `1px solid ${colors.lightGrey}`
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
  },

  smallInputRow: {
    '@media (max-width: 630px)': {
      display: 'block'
    }
  }
});
