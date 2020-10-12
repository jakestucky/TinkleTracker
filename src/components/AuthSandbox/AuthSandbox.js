import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

class AuthSandbox extends Component {

  state = {
    mode: document.cookie.split('=')[1]
  }

  register = () => {
    axios({
      method: 'POST',
      url: '/api/user/register',
      data: {
        username: 'schmedan',
        password: 'unicorn123'
      }
    })
  };

  login = () => {
    axios({
      method: 'POST',
      url: '/api/user/login',
      data: {
        username: 'schmedan',
        password: 'unicorn123'
      }
    });
  };

  logout = () => {
    axios({
      method: 'POST',
      url: '/api/user/logout'
    });
  }

  getUser = () => {
    axios({
      method: 'GET',
      url: '/api/user'
    }).then(res => {
      console.log('GET /user', res.data);
    })
  }

  setMode = (evt) => {
    let mode = evt.target.value;

    document.cookie = `mode=${mode}`;

    this.setState({
      mode: mode
    });
  }

  getPets = () => {
    axios({
      method: 'GET',
      url: '/api/pet'
    }).then(response => {
      console.log('GET /pet', response.data);
    });
  }

  createPet = () => {
    axios({
      method: 'POST',
      url: '/api/pet',
      data: {
        name: 'FuzzyWuzzy',
      }
    });
  }

  render() {
    return (
      <div 
        className={`authSandbox ${this.state.mode}`}
      >
        <h1>Auth Sandbox</h1>

        <p>
          <button onClick={this.register}>Register</button>
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
        </p>
        <p>
          <button onClick={this.getUser}>Get User</button>
          <button onClick={this.getPets}>Get Pets</button>
          <button onClick={this.createPet}>Create Pet</button>
        </p>

        <label>
          <input
            type="radio"
            name="mode"
            value="light"
            onClick={this.setMode}
          />
          Light Mode
        </label>

        <label>
          <input
            type="radio"
            name="mode"
            value="dark"
            onClick={this.setMode}
          />
          Dark Mode
        </label>
      </div>
    )
  }
}

export default AuthSandbox;