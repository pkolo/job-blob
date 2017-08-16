import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uniqBy } from 'lodash'
import {StyleSheet, css} from 'aphrodite'
import { fonts, colors } from '../styles/shared'
import Header from './Header'
import Slide from './Slide'
import JobForm from './JobForm'
import JobList from './JobList'

class App extends Component {

  getCategories() {
    // A list of all categories could also be hard-coded, or served by the API
    let categories = this.props.jobs.map(job => job.category)
    return uniqBy(categories, 'id')
  }

  render() {
    let categories = this.getCategories()
    return (
      <div className={css(styles.appContainer)}>
        <Header />
        <div className={css(styles.mainSection)}>
          <Slide content={'Job Blob wants to help you...'}/>
          <JobForm menuOptions={categories}
                   optionNameFormatter={(category) => category.name}
                   stateUpdater={this.addJob}
                   mode={'create'} />
          <Slide content={'Available Jobs'}/>
          <JobList jobs={this.props.jobs} categories={categories}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  appContainer: {
    maxWidth: '100%',
    fontFamily: fonts.second,
    fontSize: '1.25em'
  },
  mainSection: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '0 10px'
  },
  noJobs: {
    textAlign: 'center',
    color: colors.darkGrey
  }
})
