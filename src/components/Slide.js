import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite';

const Slide = props => {
  return (
    <div className={css(styles.slideContainer)}>
      <span>Job Blob wants to help you...</span>
    </div>
  )
}

const styles = StyleSheet.create({
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
    fontSize: '2.25em'
  }

})

export default Slide;
