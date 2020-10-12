import React, {Component} from 'react';
import {connect} from 'react-redux';


class PetList extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_PETS'
    });
  }

  render() {
    return (
      <>
        <h1>{this.props.user.username}'s Pets!!!!1!!!</h1>

        <ul>
          {this.props.pets.map(pet => 
            <li key={pet.id}>
              {pet.firstname}
              {this.props.user.authLevel === 'ADMIN' &&
                <button>Delete</button>
              }
            </li>
          )}
        </ul>
      </>
    )
  }
}

const mapStateToProp = reduxState => ({
  pets: reduxState.pets,
  user: reduxState.user
});

export default connect(mapStateToProp)(PetList);