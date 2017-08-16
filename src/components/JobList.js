import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobList extends Component {
  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(JobList);
