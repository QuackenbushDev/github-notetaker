import React, { Component } from 'react'

class NotesList extends Component {
    static propTypes = {
        notes: React.PropTypes.array.isRequired
    };

    render() {
        if (this.props.notes != null && this.props.notes.length != 0) {
            var notes = this.props.notes.map(function(note, index) {
                return <li className="list-group-item" key={ index }>{ note }</li>
            });
        } else {
            var notes = <li className="list-group-item">No notes found in database.</li>
        }

        return <ul className="list-group">
            { notes }
        </ul>
    }
}

export default NotesList;
