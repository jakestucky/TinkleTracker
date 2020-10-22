import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChildView.css';
import num1 from './urine1.png';
import num2 from './Poop_Emoji.png';
import wet from './sad.png';
import dry from './smiley.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

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
};

class ChildView extends Component {
  constructor() {
    super();
    var today = new Date(),
      time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = {
      currentTime: time,
      date: new Date(),
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  }

  submitEvent = (eventName) => {
    console.log('you clicked submit ');

    this.props.dispatch({
      type: 'CREATE_EVENT',
      payload: {
        date: this.state.date,
        time: this.state.currentTime,
        eventType: eventName,
        childId: this.props.child.id,
      },
    });
    this.props.history.push('/home');
  };
  render() {
    const classes = this.props.classes;
    return (
      <Container maxWidth='lg'>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <Button
                  id='#1 in Potty'
                  onClick={() => this.submitEvent('#1 in Potty')}
                  className='event-button-child'
                >
                  <img height='200' src={num1} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <Button
                  id='#2 in Potty'
                  onClick={() => this.submitEvent('#2 in Potty')}
                  className='event-button-child'
                >
                  <img height='200' src={num2} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <Button
                  id='Wet/Soiled Diaper'
                  onClick={() => this.submitEvent('Wet/Soiled Diaper')}
                  className='event-button-child'
                >
                  <img height='200' src={wet} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className={classes.paper}>
                <Button
                  id='Dry Overnight/Nap Diaper'
                  onClick={() => this.submitEvent('Dry Overnight/Nap Diaper')}
                  className='event-button-child'
                >
                  <img height='200' src={dry} />
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
      //   {/* <div className='buttonGrid'>
      //     <button
      //       id='#1 in Potty'
      //       onClick={() => this.submitEvent('#1 in Potty')}
      //       className='event-button-child'
      //     >
      //       <img height='200' src={num1} />
      //     </button>
      //     <button
      //       id='#2 in Potty'
      //       onClick={() => this.submitEvent('#2 in Potty')}
      //       className='event-button-child'
      //     >
      //       <img height='200' src={num2} />
      //     </button>
      //     <button
      //       id='Wet/Soiled Diaper'
      //       onClick={() => this.submitEvent('Wet/Soiled Diaper')}
      //       className='event-button-child'
      //     >
      //       <img height='200' src={wet} />
      //     </button>
      //     <button
      //       id='Dry Overnight/Nap Diaper'
      //       onClick={() => this.submitEvent('Dry Overnight/Nap Diaper')}
      //       className='event-button-child'
      //     >
      //       <img height='200' src={dry} />
      //     </button>
      //   </div>
      // </div> */}
    );
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors,
  child: state.childReducer,
});

export default connect(mapStateToProps)(withStyles(styles)(ChildView));
