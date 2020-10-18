import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Landing.css';
class UserPage extends Component {
  //
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  };

  render() {
    console.log('props', this.props.child.image);

    return (
      <div>
        <div className='buttonGrid'>
          <Link to='/newevent'>
            <button className='event-button'>New Potty Event</button>
          </Link>
          <Link to='/recentevent'>
            <button className='event-button'>View/Edit Recent Event</button>
          </Link>
          <Link to='/goal'>
            <button className='event-button'>View/Edit Current Goals</button>
          </Link>
          <Link to='/goal'>
            <button className='event-button'> View/Edit Child Profile</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  child: state.childReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
