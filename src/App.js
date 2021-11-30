import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    userData: [],
    currentUser: "bugsbrog",
    followers: []
  }

  render() {
    return(<div>
      Github Card
    </div>);
  }
}

export default App;
