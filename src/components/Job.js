import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import Moment from 'moment'
import {StyleSheet, css} from 'aphrodite'
import { fonts, colors } from '../styles/shared'
import * as jobActions from '../actions/jobActions'

import JobForm from './JobForm'
import Button from './form/Button'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      job: JSON.parse(JSON.stringify(this.props.job)),
      isEditing: this.props.isEditing,
      buttonsVisible: false,
      errorMessages: ''
    }

    this.updateJobState = this.updateJobState.bind(this)
    this.saveJob = this.saveJob.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.cancelJob = this.cancelJob.bind(this)
    this.clearErrors = this.clearErrors.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.showButtons = this.showButtons.bind(this)
    this.hideButtons = this.hideButtons.bind(this)
  }

  updateJobState(e) {
    const field = e.target.name;
    let job = this.state.job
    if (field === 'category') {
      let category = this.props.categories.find((cat) => cat.id === parseInt(e.target.value, 10))
      category ?  job[field] = Object.assign({}, category) : job[field] = {id: null, name: null}
    } else if (field === 'state' || field === 'city') {
      job["location"][field] = e.target.value
    } else {
      job[field] = e.target.value;
    }
    this.setState({job: job})
  }

  saveJob(e) {
    e.preventDefault()
    let job = this.state.job
    if (this.props.job.id) {
      // Editing
      this.props.actions.updateJob(job)
        .then(this.toggleEditMode)
        .catch(err => this.setState({ errorMessages: err }))

    } else {
      // Creating
      this.props.actions.createJob(job)
        .then(this.cancelJob)
        .catch(err => this.setState({ errorMessages: err }))
    }

  }

  deleteJob(e) {
    e.preventDefault()
    this.props.actions.deleteJob(this.props.job)
  }

  cancelJob() {
    this.setState({ job: JSON.parse(JSON.stringify(this.props.job)) })
    if (this.props.job.id) {
      this.toggleEditMode()
    }
  }

  clearErrors(e) {
    e.preventDefault()
    this.setState({ errorMessages: [] })
  }

  toggleEditMode(e) {
    this.state.isEditing ? this.setState({ isEditing: false }) : this.setState({ isEditing: true })
  }

  showButtons(e) {
    this.setState({ buttonsVisible: true })
  }

  hideButtons(e) {
    this.setState({ buttonsVisible: false })
  }

  render(props) {
    let job = this.state.job
    let date = Moment(this.props.job.date_posted).format("dddd, MMMM Do YYYY")
    if (this.state.isEditing) {
      return (
        <JobForm optionNameFormatter={(category) => category.name}
                 job={job}
                 errorMessages={this.state.errorMessages}
                 clearErrors={this.clearErrors}
                 saveJob={this.saveJob}
                 onChange={this.updateJobState}
                 onCancel={this.cancelJob} />
      )
    } else {
      return (
        <div className={css(styles.jobContainer, styles.smallJobContainer)}
             onMouseEnter={this.showButtons}
             onMouseLeave={this.hideButtons}>
          <div className={(css(styles.jobHeading))}>{job.title}</div>
          <div className={css(styles.jobDetails)}>{job.details}</div>
          <div className={css(styles.metaContainer, styles.smallMetaContainer)}>
            <div>
              <div>Category: <span className={css(styles.metaData)}>{job.category.name}</span></div>
              <div>Location: <span className={css(styles.metaData)}>{job.location.city}, {job.location.state}</span></div>
            </div>
            <div>Posted: <span className={css(styles.metaData)}>{date}</span></div>
          </div>.
          { this.state.buttonsVisible &&
            <div className={css(styles.buttonContainer)}>
              <Button handleClick={this.toggleEditMode} label={'Edit'} />
              <Button handleClick={this.deleteJob} label={'Delete'}/>
            </div>
          }
        </div>
      )
    }
  }
}


function mapStateToProps(state, ownProps) {
  let job = {id: null, title: '', details: '', date_posted: '', category: {name: ''}, location: {city: '', state: ''}};
  if (state.jobs.length > 0 && ownProps.id) {
    job = JSON.parse(JSON.stringify(state.jobs.find(job => job.id === ownProps.id)))
  }
  return {job: job, categories: state.categories};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);

const styles = StyleSheet.create({
  jobContainer: {
    position: 'relative',
    padding: '25px 25px 50px 25px',
    marginBottom: '20px',
    border: `1px solid ${colors.yellow}`,
    borderRadius: '5px',
    backgroundColor: colors.lightRed,
    color: colors.darkGrey,
    fontSize: '.85em'
  },
  jobHeading: {
    paddingBottom: '15px',
    color: colors.red,
    fontFamily: fonts.heading,
    fontSize: '1.5em',
    fontWeight: '600'
  },
  jobDetails: {
    fontSize: '1.15em',
    marginBottom: '15px'
  },
  metaContainer: {
    boxSizing: 'border-box',
    boxOrient: 'horizontal',
    display: 'flex',
    flexDirection: 'row',
    flexPack: 'justify',
    justifyContent: 'space-between',
    fontSize: '1em'
  },
  metaData: {
    color: colors.red
  },
  buttonContainer: {
    position: 'absolute',
    right: '0px'
  },

  smallJobContainer: {
    '@media (max-width: 630px)': {
      paddingBottom: '50px'
    }
  },
  smallMetaContainer: {
    '@media (max-width: 630px)': {
      display: 'block'
    }
  }
})
