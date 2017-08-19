import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import { width, colors } from '../styles/shared'
import { stateData } from '../modules/stateData'
import TextInput from './form/TextInput'
import TextArea from './form/TextArea'
import Button from './form/Button'
import Flash from './form/Flash'
import DropDownSelector from './form/DropDownSelector'

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullForm: false,
      errorMessages: []
    }

    this.handleFlash = this.handleFlash.bind(this)
    this.handleCancelButton = this.handleCancelButton.bind(this)
    this.showFullForm = this.showFullForm.bind(this)
    this.hideFullForm = this.hideFullForm.bind(this)
  }

  componentWillMount() {
    if (this.props.job.id) {
      this.setState({
        showFullForm: true
      })
    }
  }

  handleFlash(e) {
    this.clearErrors()
  }

  handleCancelButton(e) {
    if (!this.props.job.id) {
      this.hideFullForm()
    }
    this.props.onCancel(e)
  }

  showFullForm(e) {
    this.setState({ showFullForm: true })
  }

  hideFullForm(e) {
    this.setState({ showFullForm: false })
  }

  render(props) {
    return (
      <div className={css(styles.formContainer)}>
        {this.state.errorMessages.length > 0 && <Flash messages={this.state.errorMessages} clickHandler={this.handleFlash} />}
        <div className={css(styles.inputRow, styles.smallInputRow)}>
          <TextInput
            required={true}
            type={"text"}
            label={'What do you need done?'}
            placeholder={'I need a catsitter...'}
            name={"title"}
            content={this.props.job.title}
            width={width.large}
            changeHandler={this.props.onChange}
            focusHandler={this.showFullForm} />
          <DropDownSelector
            required={true}
            label={"Category"}
            name={"category"}
            options={this.props.menuOptions}
            selectedOption={this.props.job.category.id}
            optionNameFormatter={this.props.optionNameFormatter}
            placeholder={''}
            width={width.small}
            changeHandler={this.props.onChange} />
        </div>
        { this.state.showFullForm &&
          <div>
            <div className={css(styles.inputRow, styles.smallInputRow)}>
              <TextArea
                required={true}
                rows={5}
                label={"Anything you'd like to add?"}
                placeholder={'The more details the better. No personal info, please...'}
                name={"details"}
                content={this.props.job.details}
                width={width.full}
                changeHandler={this.props.onChange} />
            </div>
            <div className={css(styles.inputRow, width.medium, styles.smallInputRow)}>
              <TextInput
                required={true}
                type="text"
                label="City"
                placeholder={'City'}
                name={"city"}
                content={this.props.job.location.city}
                changeHandler={this.props.onChange} />
              <DropDownSelector
                required={true}
                label="State"
                name={"state"}
                options={stateData}
                selectedOption={this.props.job.location.state}
                optionNameFormatter={(state) => state.name}
                placeholder={''}
                changeHandler={this.props.onChange} />
            </div>
            <div className={css(styles.inputRow)}>
              <div className={css(styles.buttonContainer)}>
                <Button label={'Post Job'} handleClick={this.props.saveJob} />
                <Button label={'Cancel'} handleClick={this.handleCancelButton} />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default JobForm;

const styles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    padding: '15px',
    marginBottom: '10px',
    border: `1px solid ${colors.lightGrey}`
  },
  inputRow: {
    boxSizing: 'border-box',
    boxOrient: 'horizontal',
    display: 'flex',
    flexDirection: 'row',
    flexPack: 'justify',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginLeft: 'auto'
  },
  errorContainer: {
    marginRight: 'auto',
    padding: '10px'
  },

  smallInputRow: {
    '@media (max-width: 630px)': {
      display: 'block'
    }
  }
});
