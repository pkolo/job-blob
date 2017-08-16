import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite'
import { fonts, colors } from '../styles/shared'
import Header from './Header'
import Slide from './Slide'
import JobList from './JobList'


class App extends Component {
  render() {
    return (
      <div className={css(styles.appContainer)}>
        <Header />
        <div className={css(styles.mainSection)}>
          <Slide content={'Job Blob wants to help you...'}/>
          <JobList />
        </div>
      </div>
    )
  }
}

export default App;

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
