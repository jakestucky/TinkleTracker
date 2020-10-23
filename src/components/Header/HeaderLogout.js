import React, { Component } from 'react';
import './Header.css';
import star from './star1.png';
import { connect } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class HeaderLogout extends Component {
  render() {
    return (
      <header>
        <div style={{ marginLeft: '90%' }} className='head'>
          <img height='150px' alt='star logo' src={star} />
          <h1>TinkleTracker</h1>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  child: state.childReducer,
  login: state.loginMode,
});

export default connect(mapStateToProps)(HeaderLogout);
