import React, { Component } from 'react';
import { Students } from '../api/students.js';

// Students component - represents a single todo item
export default class Student extends Component {

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Students.update(this.props.student._id, {
      $set: { checked: !this.props.student.checked },
    });
  }

  deleteThisStudent() {
    Students.remove(this.props.student._id);
  }

  render() {
  // Give tasks a different className when they are checked off,
   // so that we can style them nicely in CSS
   const studentClassName = this.props.student.checked ? 'checked' : '';

    return (
      <li className={studentClassName}>
          <button className="delete" onClick={this.deleteThisStudent.bind(this)}>
            &times;
          </button>

          <input
            type="checkbox"
            readOnly
            checked={!!this.props.student.checked}
            onClick={this.toggleChecked.bind(this)}
          />

        <p className="name">{this.props.student.name}</p>
        <p className="lastName">{this.props.student.lastName}</p>
        <p className="link">{this.props.student.link}</p>
        </li>
    );
  }
}
