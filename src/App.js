import React from 'react';
import axios from 'axios';

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
        })
  }

  render() {
    return(<div>
      Github Card
    </div>);
  }
}

export default App;
