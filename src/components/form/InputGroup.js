import React, { Component } from 'react';

const InputGroup = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)

    this.onFocus = this.onFocus.bind(this)
  }

  onFocus(e) {
    console.log(e)
  }

  render() {
    return (
      <div>
        <WrappedComponent {...this.props} styleOnFocus={this.onFocus} />
      </div>
    );
  }
}

export default InputGroup;
