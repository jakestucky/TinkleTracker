import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecentEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_EVENT',
    });
  };
  render() {
    return <div>Recent Event</div>;
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RecentEvent);
