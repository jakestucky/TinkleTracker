import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className='nav'>
    <Link to='/home'>
      <h2 className='nav-title'>Home</h2>
    </Link>
    <Link to='/ChildInfo'>
      <h2 className='nav-title'>Child Info</h2>
    </Link>
    <Link to='/goal'>
      <h2 className='nav-title'>Goal</h2>
    </Link>
    <Link to='/newevent'>
      <h2 className='nav-title'>Potty Event</h2>
    </Link>
    <Link to='/home'>
      <h2 className='nav-title'>Profile</h2>
    </Link>
    <Link to='/childview'>
      <h2 className='nav-title'>Child View</h2>
    </Link>

    <LogOutButton className='log-out' />
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
