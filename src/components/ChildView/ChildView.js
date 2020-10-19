import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChildView.css';
import num1 from './urine1.png';
import num2 from './Poop_Emoji.png';
import wet from './sad.png';
import dry from './smiley.png';

class ChildView extends Component {
  render() {
    return (
      <div>
        <div className='buttonGrid'>
          <button className='event-button-child'>
            <img height='200' src={num1} />
          </button>
          <button className='event-button-child'>
            <img height='200' src={num2} />
          </button>
          <button className='event-button-child'>
            <img height='200' src={wet} />
          </button>
          <button className='event-button-child'>
            <img height='200' src={dry} />
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(ChildView);
