import React, { Component } from 'react';
import FilterList from './FilterList';

const barStyle = {
  float: 'left',
  width: '300px',
  border: '1px solid black',
  padding: '15px'
}

class SideBar extends Component {
  render() {
    return(
      <div style={barStyle}>
        <h3>Browse Jobs</h3>
        <FilterList name="Categories" data={this.props.categories} />
        <FilterList name="Locations" data={this.props.locations} />
      </div>
    )
  }
}

export default SideBar;
