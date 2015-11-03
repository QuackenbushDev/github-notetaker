import React, { Component } from 'react'
import { Link } from 'react-router'
//import History from './History'

class SearchGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleSubmit() {
        this.setState({
            username: ''
        });
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return <div className="col-sm-12">
            <div className="form-group col-sm-7">
                <input type="text" className="form-control" ref="username" onChange={this.handleUsernameChange} />
            </div>
            <div className="form-group col-sm-5">
                <Link className="btn btn-primary btn-block" to={`/profile/${this.state.username}`}>Search Github</Link>
            </div>
        </div>
    }
}

export default SearchGithub;