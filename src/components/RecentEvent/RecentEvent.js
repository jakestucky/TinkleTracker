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
        <table>
          <tr>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Child Name</th>
          </tr>
          {this.props.event.map((event) => (
            <tr>
              <td>{event.event_type}</td>
              <td>{event.date.split('T', 1)}</td>
              <td>{event.time}</td>
              <td>{event.name}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.eventReducer,
});

export default connect(mapStateToProps)(RecentEvent);
