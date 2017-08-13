import React, { Component } from 'react';
import FilterList from './FilterList';

class SideBar extends Component {
  render() {
    return(
      <div>
        <h3>Browse Jobs</h3>
        <FilterList name="Categories" data={this.props.categories} />
        <FilterList name="Locations" data={this.props.locations} />
      </div>
    )
  }
}

export default SideBar;
