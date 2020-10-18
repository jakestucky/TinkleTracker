import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrizeUploader from '../PrizeUploader';
import './Goal.css';
class Goal extends Component {
  state = {
    prizeName: '',
    goalMaxValue: '',
  };
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_GOAL',
      //get request with the child ID as a param
      url: `/goal/${this.props.child.id}`,
    });
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
        {/* New Potty goal form with file upload */}
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

          {/* Works the same as the other file uploader, just points to prize.local */}
          <PrizeUploader
            childProps={this.props.child}
            prizeProps={this.state}
          />
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
