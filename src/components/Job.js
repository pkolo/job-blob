import React, { Component } from 'react';

import { APIRoot, checkResponse, getJson } from '../modules/api'

import JobForm from './JobForm'
import Button from './form/Button'

import {StyleSheet, css} from 'aphrodite'
import { fonts, colors } from '../styles/shared'
import Moment from 'moment'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'show',
      buttonsVisible: false
    }

    this.handleDeleteButton = this.handleDeleteButton.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)
    this.showButtons = this.showButtons.bind(this)
    this.hideButtons = this.hideButtons.bind(this)
  }

  toggleEditMode(e) {
    this.state.mode === 'show' ? this.setState({ mode: 'edit' }) : this.setState({ mode: 'show' })
  }

  handleDeleteButton(e) {
    e.preventDefault()

    fetch(APIRoot(`jobs/${this.props.job.id}`),
    {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(getJson)
    .then(checkResponse)
    .then(this.props.handleDelete(this.props.job))
    .catch(err => console.log('ERROR', err))
  }

  showButtons(e) {
    this.setState({ buttonsVisible: true })
  }

  hideButtons(e) {
    this.setState({ buttonsVisible: false })
  }

  render(props) {
    let job = this.props.job
    let date = Moment(job.date_posted).format("dddd, MMMM Do YYYY")
    if (this.state.mode === 'edit') {
      return (
        <JobForm categoryOptions={this.props.categoryOptions} mode='edit' job={job} toggleParentMode={this.toggleEditMode} stateUpdater={this.props.stateUpdater} />
      )
    } else {
      return (
        <div className={css(styles.jobContainer)} onMouseEnter={this.showButtons} onMouseLeave={this.hideButtons}>
          <div className={(css(styles.jobHeading))}>{job.title}</div>
          <p>{job.details}</p>
          <div className={css(styles.metaContainer)}>
            <div>Posted under {job.category.name} from {job.location.city}, {job.location.state} on {date}</div>
          </div>
          {this.state.buttonsVisible &&
            <div className={css(styles.buttonContainer)}>
              <Button handleClick={this.toggleEditMode} label={'Edit'} />
              <Button handleClick={this.handleDeleteButton} label={'Delete'}/>
            </div>
          }
        </div>
      )
    }
  }
}

export default Job;

const styles = StyleSheet.create({
  jobContainer: {
    position: 'relative',
    padding: '15px',
    marginBottom: '10px',
    border: `1px solid ${colors.yellow}`,
    backgroundColor: colors.lightRed,
    color: colors.darkGrey,
    fontSize: '.85em'
  },
  jobHeading: {
    paddingBottom: '10px',
    color: colors.red,
    fontFamily: fonts.heading,
    fontSize: '1.5em',
    fontWeight: '600'
  },
  metaContainer: {
    fontSize: '.75em'
  },
  buttonContainer: {
    position: 'absolute',
    top: '5px',
    right: '0px'
  }
})
