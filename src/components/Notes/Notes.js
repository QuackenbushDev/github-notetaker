import React, { Component } from 'react'
import NotesList from './NotesList'
import AddNote from './AddNote'

class Notes extends Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h3> Notes for { this.props.username }</h3>
            <AddNote username={ this.props.username } addNote={ this.props.addNote } value="Add Note" />
            <NotesList notes={ this.props.notes } />
        </div>
    }
}

export default Notes;