import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../api/students.js'

import Student from './Student.js';

// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const lastName = ReactDOM.findDOMNode(this.refs.lastNameInput).value.trim();
    const link = ReactDOM.findDOMNode(this.refs.linkInput).value.trim();

    Students.insert({
      name,
      lastName,
      link
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
          <form className="new-student" onSubmit={this.handleSubmit.bind(this)} >
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
          <button onClick = {this.handleSubmit.bind(this)} className = "myButton" > Soumettre </ button>
          </form>
        </header>

        <ul>
          {this.renderStudents()}
        </ul>
      </div>
    )
  }
}

export default withTracker( () => {
  return {
    students: Students.find({}).fetch(),
  };
})(App);
