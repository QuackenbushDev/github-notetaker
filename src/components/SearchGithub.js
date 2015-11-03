import React, { Component } from 'react'
import { Router } from 'react-router'
import History from './History'

class SearchGithub extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        var username = this.refs.username.value;
        this.refs.username.value = '';

        // TODO: Look into why the DOM refreshes twice. Initial redirect includes a ? before the url, before redirecting finally to the profile page.
        History.pushState(null, `/#/profile/${username}`);
    }

    render() {
        return <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-7">
                    <input type="text" className="form-control" ref="username" />
                </div>
                <div className="form-group col-sm-5">
                    <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                </div>
            </form>
        </div>
    }
}

export default SearchGithub;