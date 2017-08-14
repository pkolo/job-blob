import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite';
import { colors, fonts } from '../../styles/shared'

import DropDownSelector from '../form/DropDownSelector'

class FilterWidget extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFilter: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    let value = e.target.value
    this.setState({ selectedFilter: value })
    this.props.stateUpdater({value: value, filterType: this.props.filterType})
  }

  render() {
    return (
      <DropDownSelector
        required={false}
        label={`Filter by ${this.props.filterType}`}
        name={"categorySelection"}
        options={this.props.menuOptions}
        placeholder={''}
        selectedOption={this.state.selectedFilter}
        changeHandler={this.handleInputChange}
        optionNameFormatter={this.props.optionNameFormatter}/>
    )
  }
}

export default FilterWidget;
