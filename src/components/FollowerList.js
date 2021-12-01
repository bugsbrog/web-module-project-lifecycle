import React from 'react';
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        console.log(this.props.followers);
        return(
            <div className="follower-list">
                <h2>Followers:</h2>
                <div className="follower-items">
                    {
                        this.props.followers.map(x => {
                            return <Follower follower={x}/>
                        })
                    }
                </div>
            </div>);
    }
}

export default FollowerList;