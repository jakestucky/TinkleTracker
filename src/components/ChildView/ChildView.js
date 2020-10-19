import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChildView.css';
import num1 from './urine1.png';
import num2 from './Poop_Emoji.png';
import wet from './sad.png';
import dry from './smiley.png';

class ChildView extends Component {
  constructor() {
    super();
    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = {
      currentTime: time,
      date: new Date(),
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  }

  submitEvent = (eventName) => {
    console.log('you clicked submit ');

    this.props.dispatch({
      type: 'CREATE_EVENT',
      payload: {
        date: this.state.date,
        time: this.state.currentTime,
        eventType: eventName,
        childId: this.props.child.id,
      },
    });
    this.props.history.push('/home');
  };
  render() {
    return (
      <div>
        <div className='buttonGrid'>
          <button
            id='#1 in Potty'
            onClick={() => this.submitEvent('#1 in Potty')}
            className='event-button-child'
          >
            <img height='200' src={num1} />
          </button>
          <button
            id='#2 in Potty'
            onClick={() => this.submitEvent('#2 in Potty')}
            className='event-button-child'
          >
            <img height='200' src={num2} />
          </button>
          <button
            id='Wet/Soiled Diaper'
            onClick={() => this.submitEvent('Wet/Soiled Diaper')}
            className='event-button-child'
          >
            <img height='200' src={wet} />
          </button>
          <button
            id='Dry Overnight/Nap Diaper'
            onClick={() => this.submitEvent('Dry Overnight/Nap Diaper')}
            className='event-button-child'
          >
            <img height='200' src={dry} />
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  child: state.childReducer,
});

export default connect(mapStateToProps)(ChildView);
