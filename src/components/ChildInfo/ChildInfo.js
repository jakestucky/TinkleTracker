import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildInfo extends Component {
  state = {
    ChildName: '',
    Age: '',
    ImageName: '',
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

  sendChild = () => {
    console.log('we sending this kid', this.state);
  };

  render() {
    console.log('current state is', this.state);

    return (
      <div>
        {/* NEED TO CHANGE THIS */}

        <form
          onSubmit={this.sendChild}
          action='/uploadProfilePicture'
          enctype='multipart/form-data'
          method='POST'
        >
          <h2>Your Child's Info</h2>
          <span>Upload Profile Picture:</span>
          <input
            type='file'
            name='mypic'
            required
            onChange={this.handleInputChangeForImg('ImageName')}
          />{' '}
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
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ChildInfo);