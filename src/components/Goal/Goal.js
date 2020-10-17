import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrizeUploader from '../PrizeUploader';
class Goal extends Component {
  state = {
    prizeName: '',
    goalMaxValue: '',
  };

  handleInputChangeFor = (propertyName) => (event) => {
    console.log('changing', propertyName, event.target.value);

    this.setState({
      [propertyName]: event.target.value,
    });
  };
  render() {
    console.log('state is', this.state);

    return (
      <div>
        <form>
          <label for='goalMaxValue'>Potty Goal #</label>
          <input
            id='goalMaxValue'
            size='30'
            type='number'
            min='1'
            max='10'
            placeholder=' '
            value={this.state.goalMaxValue}
            onChange={this.handleInputChangeFor('goalMaxValue')}
          ></input>
          <br></br>
          <label for='prizeName'>Prize Name</label>
          <input
            id='prizeName'
            type='text'
            placeholder='Enter Prize Here'
            value={this.state.prizeName}
            onChange={this.handleInputChangeFor('prizeName')}
          ></input>
          <br></br>
          <label for='imageUrl'>Prize Image URL</label>
          <input
            id='imageUrl'
            type='url'
            placeholder='Enter Prize Here'
            value={this.state.imageUrl}
            onChange={this.handleInputChangeFor('imageUrl')}
          ></input>
          <input
            id='imageUrl'
            type='url'
            placeholder=''
            value={this.state.imageUrl}
            onChange={this.handleInputChangeFor('imageUrl')}
          ></input>
          <PrizeUploader
            childProps={this.props.child}
            prizeProps={this.state}
          />
          <p>Image Preview</p> <img src={this.state.imageUrl} height='200' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  user: state.user,
  child: state.childReducer,
});

export default connect(mapStateToProps)(Goal);
