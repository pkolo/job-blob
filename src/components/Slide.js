import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite';
import { fonts } from '../styles/shared'

const Slide = props => {
  return (
    <div className={css(styles.slideContainer)}>
      <span className={css(styles.slide)}>Job Blob wants to help you...</span>
    </div>
  )
}

const styles = StyleSheet.create({
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0'
  },
  slide: {
    fontFamily: fonts.heading,
    fontSize: '2.25em'
  }
})

export default Slide;
