import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecentEvent.css';

class RecentEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_EVENT',
    });
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  };

  deleteEvent = (id) => {
    console.log('event id: ', id);

    this.props.dispatch({
      type: 'DELETE_EVENT',
      url: `/event/${id}`,
    });
  };

  editEvent = (id) => {
    console.log('edit id: ', id);

    this.props.dispatch({
      type: 'EDIT_EVENT',
      url: `/event/${id}`,
    });
    this.props.history.push(`/event/edit/${id}`);
  };
  render() {
    console.log('current props', this.props.event);

    return (
      <div>
        <h2 className='recent-header'> Recent Potty Events</h2>
        <table className='events-table'>
          <tr>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Child Name</th>
            <th className='end-header'></th>
            <th></th>
          </tr>
          <tbody>
            {this.props.event.map((event) => (
              <tr key={event.id}>
                <td>{event.event_type}</td>
                <td>{event.date.split('T', 1)}</td>
                <td>{event.time}</td>
                <td>{event.name}</td>
                <td className='recent-event-button'>
                  <button onClick={() => this.editEvent(event.id)}>Edit</button>
                </td>
                <td className='recent-event-button'>
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
