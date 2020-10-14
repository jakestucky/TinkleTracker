import React, { Component } from 'react';
import { connect } from 'react-redux';
import pic from '../../uploads/mypic-1602684826950.jpg';
import './Landing.css';
class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <div className='childInfo'>
          <img height='150PX' src={pic} />

          <p>Adeline, 3 years old</p>
        </div>
        <div className='buttonGrid'>
          <button className='event-button'>Create New Potty Event</button>
          <button className='event-button'>View/Edit Recent Event</button>
          <button className='event-button'>View/Edit Current Goals</button>
          <button className='event-button'> View/Edit Child Profile</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
