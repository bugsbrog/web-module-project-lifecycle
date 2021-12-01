import React from 'react';
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        console.log(this.props.followers);
        return(
            <div className="follower-list">
                <div className="my-followers">
                <h2>Followers:</h2>
                </div>
                <div className="follower-items">
                    {
                        this.props.followers.map(f => {
                            return <Follower follower={f}/>
                        })
                    }
                </div>
            </div>);
    }
}

export default FollowerList;