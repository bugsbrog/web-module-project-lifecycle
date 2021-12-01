import React from 'react';
import FollowerList from './FollowerList';

class User extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="profile">
                    <img src={this.props.user.avatar_url} alt="avatar" />
                    <div className="user-information">
                        <h2>{this.props.user.name}</h2>
                        <h5>({this.props.user.login})</h5>
                        <h3>Total Repos: {this.props.user.public_repos}</h3>
                        <h3>Total Followers: {this.props.user.followers}</h3>
                    </div>
                </div>
                <FollowerList followers={this.props.followers}/>
            </div>
        )
    }
}

export default User;