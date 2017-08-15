import React, { Component } from 'react';

import Moment from 'moment'

import {StyleSheet, css} from 'aphrodite'
import { fonts, colors } from '../styles/shared'

import { APIRoot, checkResponse, getJson } from '../modules/api'

import JobForm from './JobForm'
import Button from './form/Button'

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

  toggleEditMode(e) {
    this.state.mode === 'show' ? this.setState({ mode: 'edit' }) : this.setState({ mode: 'show' })
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
        <JobForm menuOptions={this.props.menuOptions}
                 optionNameFormatter={(category) => category.name}
                 mode='edit'
                 job={job}
                 toggleParentMode={this.toggleEditMode}
                 stateUpdater={this.props.stateUpdater} />
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
          </div>
          { this.state.buttonsVisible &&
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
