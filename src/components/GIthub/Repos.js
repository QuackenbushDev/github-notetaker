import React, { Component } from 'react'

class Repos extends Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div> { this.props.repos } </div>
    }
}

export default Repos;