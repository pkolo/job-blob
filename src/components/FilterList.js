import React, { Component } from 'react';

class FilterList extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          {this.props.data.map(el => <li>{el.id}</li>)}
        </ul>
      </div>
    )
  }
}

export default FilterList;
