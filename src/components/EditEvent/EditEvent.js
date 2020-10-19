import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'react-rainbow-components';
import './style.css';
import { TimePicker } from 'react-rainbow-components';

//TODO GET THE DAMN STATE WORKING ON LOAD

class EditEvent extends Component {
  //set local date and time as default values

  state = {
    time: this.props.edit.time,
    date: this.props.edit.date,
    eventType: this.props.edit.event_type,
    childId: this.props.edit.child_ID,
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.setState({
      time: this.props.edit.time,
      date: this.props.edit.date,
      eventType: this.props.edit.event_type,
      childId: this.props.edit.child_ID,
    });
  };

  handleInputChange = (propertyName, event) => {
    console.log('this is changing', propertyName, this.state.title);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  submitEdit = () => {
    console.log('you clicked submit ');

    this.props.dispatch({
      type: 'PUT_EVENT',
      url: `/event/${this.props.edit.id}`,
      payload: {
        date: this.state.date,
        time: this.state.currentTime,
        eventType: this.state.eventType,
        childId: this.state.childId,
      },
    });
    this.props.history.push('/home');
  };
  render() {
    console.log('props test', this.state);

    return (
      <div>
        <form>
          <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
            <DatePicker
              value={this.props.edit.date}
              label='Potty Event Date'
              onChange={(value) => this.setState({ date: value })}
              //cannot pick a date in the future
              maxDate={new Date()}
            />
          </div>
          <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
            <TimePicker
              id='time-picker-1'
              value={this.props.edit.time}
              label='Potty Event Time'
              onChange={(value) => this.setState({ time: value })}
            />
          </div>
          <div>
            <select
              id='Event-type'
              label='Potty Event Type'
              value={this.state.event}
              onChange={(event) => this.handleInputChange('eventType', event)}
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
