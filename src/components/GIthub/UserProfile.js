import React, { Component } from 'react'

class UserProfile extends Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                User Profile: <br />
                Username: { this.props.username } <br />
                Bio: { this.props.bio.name } <br />
        </div>
    }
}

export default UserProfile;