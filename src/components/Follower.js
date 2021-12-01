import React from 'react';

class Follower extends React.Component {

    render() {
        return(
            <div className="follower">
                <img src={this.props.follower.avatar_url} alt="avatar" />
                <h3>{this.props.follower.login}</h3>
            </div>);
    }
}

export default Follower;