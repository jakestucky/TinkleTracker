import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploader from '../FileUploader';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
const styles = {
  paper: {
    padding: 10,
    textAlign: 'center',
    background: '#4caf4f60',
    '& a': {
      display: 'inline-block',
      color: 'green',
    },
  },
  root: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#4caf50',
    },
  },
};

class NewChild extends Component {
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
    return (
      <Container maxWidth='lg'>
        <form style={{ textAlign: 'center', display: 'block' }}>
          <h2>Add or Update Child's Info</h2>
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  child: state.childReducer,
});

export default connect(mapStateToProps)(withStyles(styles)(NewChild));
