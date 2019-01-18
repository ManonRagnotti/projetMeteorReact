import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor'

import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../api/students.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';

import Student from './Student.js';
import '../styles/App.css';

// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const lastName = ReactDOM.findDOMNode(this.refs.lastNameInput).value.trim();
    const link = ReactDOM.findDOMNode(this.refs.linkInput).value.trim();

    Meteor.call('students.insert', {name, lastName, link})

    Students.insert({
      name,
      lastName,
      link,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.nameInput).value = '';
    ReactDOM.findDOMNode(this.refs.lastNameInput).value = '';
    ReactDOM.findDOMNode(this.refs.linkInput).value = '';
  }

  renderStudents() {
    return this.props.students.map((student) => (
      <Student key={student._id} student={student} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Students List</h1>

          <AccountsUIWrapper />
        </header>

        { this.props.currentUser ?
        <section className="form-content">
          <div className="big-circle-background"></div>
          <div className="little-circle-background">
            <form className="new-student" onSubmit={this.handleSubmit.bind(this)} >
              <div className="inputs">
                <input
                  type = "text"
                  ref="nameInput"
                  placeholder = "Votre Prénom"
                  className = "formfield"
                />
                <input
                  type = "text"
                  ref="lastNameInput"
                  placeholder = "Votre nom"
                  className = "formfield"
                />
                <input
                  type = "text"
                  ref="linkInput"
                  placeholder = "Lien GIT"
                  className = "formfield"
                />
              </div>
              <div className="btn-add-content">
                <button onClick = {this.handleSubmit.bind(this)} className = "myButton" > Ajouter un élève </ button>
              </div>
            </form>
          </div>
        </section> : '' }

        <section className="students-list-content">
          <ul className="list-students-container">
            {this.renderStudents()}
          </ul>
        </section>
      </div>
    )
  }
}

export default withTracker( () => {
  return {
    students: Students.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
