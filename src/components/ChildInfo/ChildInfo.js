import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploader from '../FileUploader';

class ChildInfo extends Component {
  state = {
    ChildName: '',
    Age: '',
  };
  handleInputChangeFor = (propertyName) => (event) => {
    console.log('changing', propertyName, event.target.value);

    this.setState({
      [propertyName]: event.target.value,
    });
  };
  handleInputChangeForImg = (propertyName) => (event) => {
    console.log('changing', propertyName, event.target.value);
    //this .split removes the fake path script designed to obfuscate the true file path
    let path = event.target.value.split('\\').pop();
    this.setState({
      [propertyName]: path,
    });
  };

  render() {
    console.log('current state is', this.state);
    console.log('current user props', this.props.user);
    return (
      <div>
        {/* NEED TO CHANGE THIS */}

        <form>
          <h2>Your Child's Info</h2>
          <br />
          <div>
            <label htmlFor='ChildName'>
              Your Child's Name
              <input
                type='text'
                name='ChildName'
                required
                value={this.state.ChildName}
                onChange={this.handleInputChangeFor('ChildName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor='Age'>
              Age
              <input
                type='number'
                name='Age'
                required
                value={this.state.Age}
                onChange={this.handleInputChangeFor('Age')}
              />
            </label>
          </div>
          <FileUploader
            childProps={this.state}
            userProps={this.props.user.id}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ChildInfo);
