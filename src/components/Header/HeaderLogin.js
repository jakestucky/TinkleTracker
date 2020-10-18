import React, { Component } from 'react';
import './Header.css';
import star from './star1.png';
import { connect } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class HeaderLogin extends Component {
  render() {
    return (
      <header>
        <div className='head'>
          <img height='150px' src={star} />
          <h1>TinkleTracker</h1>
        </div>

        <div className='childInfo'>
          <img
            className='profile-img'
            height='150PX'
            src={this.props.child.image}
          />
          <p>
            {this.props.child.name}, Age {this.props.child.age}
          </p>
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

export default connect(mapStateToProps)(HeaderLogin);