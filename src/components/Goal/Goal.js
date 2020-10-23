import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrizeUploader from '../PrizeUploader';
import './Goal.css';
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
      <Container maxWidth='lg'>
        <div style={{ textAlign: 'center', display: 'block' }}>
          {this.props.goal.map((goal) => (
            <div>
              <h2>Current Goal: {goal.prize_name}</h2>
              <progress max={goal.max_goal} value={this.props.status.count}>
                {this.props.status.count} / {goal.max_goal}
              </progress>
              <p>
                Goal Progress {this.props.status.count} / {goal.max_goal}
              </p>
              <img height='200' alt='current goal' src={goal.prize_image} />
            </div>
          ))}
        </div>

        <form style={{ textAlign: 'center', display: 'block' }}>
          <h2>Create New Goal!</h2>
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
      </Container>
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

export default connect(mapStateToProps)(withStyles(styles)(Goal));
