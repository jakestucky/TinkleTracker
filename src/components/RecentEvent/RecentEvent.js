import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecentEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_EVENT',
    });
  };
  render() {
    console.log('current props', this.props.event);

    return (
      <div>
        Recent Event
        <ul>
          {this.props.event.map((event) => (
            <li>
              <h2>{event.event_type}</h2>
              <p>{event.date.split('T', 1)}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.eventReducer,
});

export default connect(mapStateToProps)(RecentEvent);
