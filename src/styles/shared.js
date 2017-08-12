import {StyleSheet} from 'aphrodite'

export const button = StyleSheet.create({
  regular: {
    borderRadius: '25px'
  }
})

export const inputGroup = StyleSheet.create({
  container: {
    padding: '10px'
  },
  label: {
    paddingBottom: '5px',
    fontSize: '1.15em',
    fontWeight: '200'
  },
  input: {
    width: '100%'
  }
})

export const width = StyleSheet.create({
  full: {
    width: '100%'
  },
  large: {
    width: '75%'
  },
  medium: {
    width: '50%'
  },
  small: {
    width: '25%'
  }
})
