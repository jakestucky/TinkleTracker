import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrizeUploader from '../PrizeUploader';
import './Goal.css';
class Goal extends Component {
  state = {
    prizeName: '',
    goalMaxValue: '',
    hasGoal: '',
  };
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
    this.setState({
      ...this.state,
      hasGoal: this.props.goal,
    });
    this.props.dispatch({
      type: 'FETCH_GOAL',
      //get request with the child ID as a param
      url: `/goal/${this.props.child.id}`,
    });
    this.props.dispatch({
      type: 'FETCH_GOAL_STATUS',
      //get request with the child ID as a param
      url: `/goal/count/${this.props.child.id}`,
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    console.log('changing', propertyName, event.target.value);

    this.setState({
      [propertyName]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Current Goal:</h2>
          {this.props.goal.map((goal) => (
            <div>
              <p>{goal.prize_name}</p>
              <img height='200' src={goal.prize_image} />
              <p>
                Goal Progress {this.props.status.count} / {goal.max_goal}
              </p>

              <progress max={goal.max_goal} value={this.props.status.count}>
                {this.props.status.count} / {goal.max_goal}
              </progress>
            </div>
          ))}
        </div>
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
  goal: state.goalReducer,
  status: state.goalStatus,
});

export default connect(mapStateToProps)(Goal);
