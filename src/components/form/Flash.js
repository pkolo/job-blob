import React from 'react';

import { css, StyleSheet } from 'aphrodite';
import { colors } from '../../styles/shared'

const Flash = props => {
  let messages= props.messages
  return (
    <div className={css(styles.flashContainer)} onClick={props.clickHandler}>
      <div className={(css(styles.messageContainer, styles.smallMessageContainer))}>
        <div className={css(styles.flashHeader)}>Something went wrong...</div>
        <ul className={(css(styles.messages))}>
          {messages.map((message, i) => <li key={i}>{message}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Flash;

const styles = StyleSheet.create({
  flashContainer: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.red
  },
  messageContainer: {
    maxWidth: '50%'
  },
  flashHeader: {
    fontSize: '1.25em',
    fontWeight: '600'
  },

  smallMessageContainer: {
    '@media (max-width: 630px)': {
      maxWidth: '85%'
    }
  }
})
