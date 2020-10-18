import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecentEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_EVENT',
    });
  };

  deleteEvent = (eventsid) => {
    console.log('event id: ', eventsid);

    this.props.dispatch({
      type: 'DELETE_EVENT',
      payload: '',
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
          <tbody>
            {this.props.event.map((event) => (
              <tr key={event.id}>
                <td>{event.event_type}</td>
                <td>{event.date.split('T', 1)}</td>
                <td>{event.time}</td>
                <td>{event.name}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.deleteEvent(event.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.eventReducer,
});

export default connect(mapStateToProps)(RecentEvent);
