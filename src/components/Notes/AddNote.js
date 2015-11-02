import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AddNote extends Component {
    static propTypes = {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        var newNote = this.refs.note.value;

        if (newNote == '') {
            console.log("Can't add an empty note...");
            return;
        }

        this.refs.note.value = '';
        this.props.addNote(newNote);
    }

    render() {
        return <div className="input-group">
            <input type="text" className="form-control" ref="note" placeholder="Add New Note" />
            <span className="input-group-btn">
                <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit </button>
            </span>
        </div>
    }
}

export default AddNote;