import React from 'react';
import axios from 'axios';
import User from './components/User';
import './index.css'

class App extends React.Component {
  state = {
    user: {},
    myUser: "bugsbrog",
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.myUser}`)
        .then(res => {
          // console.log(res)
          this.setState({
            ...this.state,
            user: res.data
          });
        })
        .catch(err => {
          console.error(err);
        });
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.state.user !== prevState.user) {
          axios.get(`https://api.github.com/users/${this.state.myUser}/followers`)
              .then(resp => {
                  this.setState({
                      ...this.state,
                      followers: resp.data
                  })
              })
              .catch(err => {
                  console.error(err);
              })
      }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.myUser}`)
        .then(res => {
            this.setState({
              ...this.state,
              user: res.data
            })
        })
        .catch(err => {
          console.error(err);
        })
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
      myUser: e.target.value
    })
  }

  render() {
    // console.log(this.state)
    return(
        <div>
          <h1>Github User Card</h1>
          <form>
            <input
                value={this.state.myUser}
                onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Search</button>
          </form>
            <User user={this.state.user} followers={this.state.followers}/>
    </div>
    );
  }
}

export default App;