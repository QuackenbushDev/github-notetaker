import React, { Component } from 'react'

class NotesList extends Component {
    static propTypes = {
        notes: React.PropTypes.array.isRequired
    };

    render() {
        var notes = this.props.notes.map(function(note, index) {
            return <li className="list-group-item" key={ index }>{ note }</li>
        });

        return <ul className="list-group">
            { notes }
        </ul>
    }
}

export default NotesList;
