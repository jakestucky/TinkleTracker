import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class ChildInfo extends Component {
  state = {
    ChildName: '',
    Age: '',
    ImageName: '',
  };
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <h1>Your Child's Info</h1>
          <div>
            <label htmlFor='ChildName'>
              Your Child's Name
              <input
                type='text'
                name='ChildName'
                value={this.state.ChildName}
                onChange={this.handleInputChangeFor('ChildName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor='Age'>
              Age
              <input
                type='text'
                name='Age'
                value={this.state.Age}
                onChange={this.handleInputChangeFor('Age')}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ChildInfo);
