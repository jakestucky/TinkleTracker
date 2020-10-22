import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import './Landing.css';
const styles = {
  paper: {
    padding: 10,
    marginTop: 50,
    textAlign: 'center',
    background: '#4caf50',
    '&:hover': {
      backgroundColor: '#4caf4f60',
    },
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4caf50' /* Green */,
    textAlign: 'center',
    padding: 20,
    height: 200,
    color: 'white',
    borderRadius: 10,
    fontSize: 36,
    '&:hover': {
      backgroundColor: '#4caf50',
    },
  },
};

class UserPage extends Component {
  //
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  };

  render() {
    console.log('props', this.props.child.image);

    const classes = this.props.classes;
    return (
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Button
                onClick={() => {
                  window.location.href = 'http://localhost:3000/home#/newevent';
                }}
                className={classes.button}
              >
                New Potty Event
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Button
                onClick={() => {
                  window.location.href =
                    'http://localhost:3000/home#/recentevent';
                }}
                className={classes.button}
              >
                View Recent Events
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Button
                onClick={() => {
                  window.location.href = 'http://localhost:3000/home#/goal';
                }}
                className={classes.button}
              >
                View Current Goals
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>
              <Button
                onClick={() => {
                  window.location.href =
                    'http://localhost:3000/home#/childinfo';
                }}
                className={classes.button}
              >
                View Child's Profile
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  child: state.childReducer,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
