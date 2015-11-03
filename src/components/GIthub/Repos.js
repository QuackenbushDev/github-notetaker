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
        var repos = this.props.repos.map(function(repo, index) {
            return <li className="list-group-item" key={index}>
                {repo.html_url && <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>}
                {repo.description && <p>{repo.description}</p>}
            </li>
        });

        return <div>
                <h3> User Repos </h3>
                <ul className="list-group">
                    {repos}
                </ul>
            </div>
    }
}

export default Repos;