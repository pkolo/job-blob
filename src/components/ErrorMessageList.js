import React, { Component } from 'react';

class ErrorMessageList extends Component {
  render() {
    return (
      <div>
        {this.props.errors}
      </div>
    )
  }
}

export default ErrorMessageList;
