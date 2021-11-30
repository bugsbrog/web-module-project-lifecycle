import React from 'react';
import axios from 'axios';
import User from './components/User';
import Follower from './components/User';

class App extends React.Component {
  state = {
    userData: [],
    currentUser: "bugsbrog",
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bugsbrog')
        .then(res => {
          this.setState({
            ...this.state,
            userData: res.data
          });
        })
        .catch(err => {
          console.error(err);
        });
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
        .then(res => {
            this.setState({
              ...this.state,
              userData: res.data
            })
        })
        .catch(err => {
          console.error(err);
        })
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
      currentUser: e.target.value
    })
  }

  render() {
    return(
        <div>
          <h1>Github Card</h1>
          <form>
            <input
                value={this.state.currentUser}
                onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Search</button>
          </form>
    </div>);
  }
}

export default App;
