import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <div className='childInfo'>
          <img height='150PX' src={this.props.child.image} />

          <p>
            {this.props.child.name}, {this.props.child.age} years old
          </p>
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
  child: state.childReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
