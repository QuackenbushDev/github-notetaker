import React, { Component } from 'react'
import NotesList from './NotesList'

class Notes extends Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h3> Notes for { this.props.username }</h3>
            <NotesList notes={ this.props.notes } />
        </div>
    }
}

export default Notes;