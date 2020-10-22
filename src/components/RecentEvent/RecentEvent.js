import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecentEvent.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
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
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#4caf50',
    },
  },
};
class RecentEvent extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_EVENT',
    });
    this.props.dispatch({
      type: 'FETCH_USER',
    });
    this.props.dispatch({
      type: 'FETCH_CHILD',
    });
  };

  deleteEvent = (id) => {
    console.log('event id: ', id);

    this.props.dispatch({
      type: 'DELETE_EVENT',
      url: `/event/${id}`,
    });
  };

  editEvent = (id) => {
    console.log('edit id: ', id);

    this.props.dispatch({
      type: 'EDIT_EVENT',
      url: `/event/${id}`,
    });
    this.props.history.push(`/event/edit/${id}`);
  };
  render() {
    console.log('current props', this.props.event);

    const classes = this.props.classes;

    return (
      <Container maxWidth='lg'>
        <div>
          <h2 className='recent-header'> Recent Potty Events</h2>

          <Grid container spacing={3}>
            {this.props.event.map((event) => (
              <Grid item xs={12} sm={6} md={3} key={event.id}>
                <Paper className={classes.paper}>
                  <h2>{event.event_type}</h2>
                  <h3>Date: {event.date.split('T', 1)}</h3>
                  <h3>Time: {event.time}</h3>
                  <h3>Child's Name: {event.name}</h3>
                  <div className={classes.buttonGroup}>
                    <ButtonGroup
                      variant='contained'
                      aria-label='contained primary button group'
                    >
                      <Button
                        variant='contained'
                        className={classes.button}
                        onClick={() => this.editEvent(event.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='contained'
                        className={classes.button}
                        onClick={() => this.deleteEvent(event.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </Paper>
                {/* </tr> */}
              </Grid>
            ))}
            {/* </tbody>
            </table> */}
          </Grid>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.eventReducer,
});

export default connect(mapStateToProps)(withStyles(styles)(RecentEvent));
