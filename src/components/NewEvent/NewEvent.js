import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'react-rainbow-components';
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
      date: new Date(),
      eventType: 'Wet/Soiled Diaper',
      childId: '',
    };
  }
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
    this.setState({
      ...this.state,
      childId: this.props.child.id,
    });
  };

  handleInputChange = (propertyName, event) => {
    console.log('this is changing', propertyName, event.target.value);
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };
  handleInputChangeDate = (propertyName, event) => {
    console.log('this is changing', propertyName, event);
    this.setState({
      ...this.state,
      [propertyName]: event,
    });
  };

  submitEvent = () => {
    console.log('you clicked submit in Newevent');

    this.props.dispatch({
      type: 'CREATE_EVENT',
      payload: {
        date: this.state.date,
        time: this.state.currentTime,
        eventType: this.state.eventType,
        childId: this.props.child.id,
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
              value={this.state.date}
              label='Potty Event Date'
              onChange={(value) => this.handleInputChangeDate('date', value)}
              //cannot pick a date in the future
              maxDate={new Date()}
            />
          </div>
          <div className='rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large'>
            <TimePicker
              id='time-picker-1'
              value={this.state.currentTime}
              label='Potty Event Time'
              onChange={(value) => this.handleInputChangeDate('time', value)}
            />
          </div>
          <div>
            <select
              id='Event-type'
              label='Potty Event Type'
              defaultValue={'DEFAULT'}
              onChange={(event) => this.handleInputChange('eventType', event)}
            >
              <option>Wet/Soiled Diaper</option>
              <option>Dry Night/Nap Diaper</option>
              <option>#1 in Potty</option>
              <option>#2 in Potty</option>
            </select>
            <br></br>
            <button className='new-event-button' onClick={this.submitEvent}>
              Submit Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  child: state.childReducer,
});

export default connect(mapStateToProps)(NewEvent);
