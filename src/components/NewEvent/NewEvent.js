import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Picklist, PicklistOption, DatePicker } from 'react-rainbow-components';
import './style.css';
import { TimePicker } from 'react-rainbow-components';

class NewEvent extends Component {
  //set local date and time as default values
  constructor() {
    super();
    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = {
      currentTime: time,
      date: today,
      eventType: '',
    };
  }

  handleInputChange = (propertyName, event) => {
    console.log('this is changing', propertyName, this.state.title);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  submitEvent = () => {
    this.props.dispatch({});
  };
  render() {
    console.log('state is', this.state);

    return (
      <div className>
        <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
          <DatePicker
            value={this.state.date}
            label='Potty Event Date'
            onChange={(value) => this.setState({ date: value })}
            //cannot pick a date in the future
            maxDate={new Date()}
          />
        </div>
        <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
          <TimePicker
            id='time-picker-1'
            value={this.state.currentTime}
            label='Potty Event Time'
            onChange={(value) => this.setState({ time: value })}
          />
        </div>
        <div>
          <select
            value={this.state.eventType}
            onChange={(event) => this.handleInputChange('eventType', event)}
          >
            <option disabled selected value=''>
              Select Event Type
            </option>
            <option>Wet/Soiled Diaper</option>
            <option>Dry Overnight/Nap Diaper</option>
            <option>#1 in Potty</option>
            <option>#2 in Potty</option>
          </select>
          <br></br>
          <button onClick={this.submitEvent}>Submit Event</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(NewEvent);
