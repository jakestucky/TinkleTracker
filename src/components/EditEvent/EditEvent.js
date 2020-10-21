import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'react-rainbow-components';
import './style.css';
import { TimePicker } from 'react-rainbow-components';
import { DateTimePicker } from 'react-rainbow-components';

class EditEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
  };

  handleInputChange = (propertyName, event) => {
    console.log('this is changing', propertyName);
    this.props.dispatch({
      type: 'UPDATE_EDIT_EVENT',
      payload: {
        [propertyName]: event.target.value,
      },
    });
  };
  //needed a new onchange to handle input variation
  //from date and time picker components
  handleInputChangeDate = (propertyName, event) => {
    console.log('date is changing');
    this.props.dispatch({
      type: 'UPDATE_EDIT_EVENT',
      payload: {
        [propertyName]: event,
      },
    });
  };

  submitEdit = () => {
    console.log('you clicked submit ');
    //Pulls the data from the edit state redux and send to
    this.props.dispatch({
      type: 'PUT_EVENT',
      url: `/event/${this.props.edit.id}`,
      payload: {
        date: this.props.edit.date,
        time: this.props.edit.time,
        eventType: this.props.edit.event_type,
        childId: this.props.edit.child_ID,
      },
    });
    this.props.history.push('/home');
  };
  render() {
    return (
      <div>
        <form>
          <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
            <DatePicker
              value={this.props.edit.date}
              label='Potty Event Date'
              onChange={(value) => this.handleInputChangeDate('date', value)}
              //cannot pick a date in the future
              maxDate={new Date()}
            />
          </div>
          <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
            <TimePicker
              id='time-picker-1'
              value={this.props.edit.time}
              label='Potty Event Time'
              onChange={(value) => this.handleInputChangeDate('time', value)}
            />
          </div>
          <div>
            <select
              id='Event-type'
              label='Potty Event Type'
              value={this.props.edit.event_type}
              onChange={(event) => this.handleInputChange('event_type', event)}
            >
              <option>Wet/Soiled Diaper</option>
              <option>Dry Overnight/Nap Diaper</option>
              <option>#1 in Potty</option>
              <option>#2 in Potty</option>
            </select>
            <br></br>
            <button
              type='button'
              className='new-event-button'
              onClick={this.submitEdit}
            >
              Submit Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  edit: state.editReducer,
});

export default connect(mapStateToProps)(EditEvent);
