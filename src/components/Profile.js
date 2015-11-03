import React, { Component } from 'react'
import { Router, Link } from 'react-router'
import UserProfile from './Github/UserProfile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import Firebase from 'firebase'
import Helper from '../utils/helpers'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            bio:   {},
            repos: []
        };

        this.handleAddNote = this.handleAddNote.bind(this);
    }

    componentDidMount() {
        var _this = this;
        var ref = new Firebase('https://reactnotes-qdev.firebaseio.com');

        this.childRef = ref.child(this.props.params.username).child('notes');
        this.childRef.on('value', function(snapshot) {
            if (snapshot.val() != null && snapshot.val().length > 0) {
                var notes = snapshot.val();
            } else {
                var notes = [];
            }

            _this.setState({
                notes: notes
            });
        });

        Helper.getGithubInfo(this.props.params.username)
            .then(function(dataObj) {
                _this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                });
            });
    }

    handleAddNote(newNote) {
        console.log("Adding note: " + newNote);

        this.setState({
            notes: this.state.notes.concat([newNote])
        }, function() {
            this.childRef.set(this.state.notes);
        });
    }

    render() {
        var username = this.props.params.username;

        return <div className="row">
            <div className="col-md-4">
                <UserProfile username={username} bio={this.state.bio} />
            </div>
            <div className="col-md-4">
                <Repos username={username} repos={this.state.repos} />
            </div>
            <div className="col-md-4">
                <Notes username={username}
                       notes={this.state.notes}
                       addNote={this.handleAddNote}
                />
            </div>
        </div>
    }
}

export default Profile;