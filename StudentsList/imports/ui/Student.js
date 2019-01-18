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

  state = {
    isUpdated: false
  }

  updateThisStudent = (key) => (event) =>{
    event.preventDefault()

    const {
      name: {value: name},
      lastName: {value: lastName},
      link: {value: link}
    } = event.target

    Students.update({_id: key}, {name: name, lastName, link})

    this.setState({
      isUpdated: false
    })

  }

  deleteThisStudent() {
    Students.remove(this.props.student._id);
  }

  render() {
  // Give tasks a different className when they are checked off,
   // so that we can style them nicely in CSS
   const studentClassName = this.props.student.checked ? 'checked' : '';
   const {isUpdated} = this.state

    return (
      <li className={studentClassName} key={this.props.student._id}>
          <button className="delete" onClick={this.deleteThisStudent.bind(this)}>
            &times;
          </button>

          {isUpdated ? (
            <div className="isUpdated">
              <form onSubmit={this.updateThisStudent(this.props.student._id)}>
                <input name="name" defaultValue={this.props.student.name} />
                <input name="lastName" defaultValue={this.props.student.lastName} />
                <input name="link" defaultValue={this.props.student.link} />
                <input className="validUpdate" type="submit" value="Update" id="checkbox" />
              </form>
            </div>
          ) : (
              <div className="studentInfo">
                <button id="checkbox" className="update" onClick={() => this.setState({ isUpdated: true })}>Update</button>
                <div id="name" > {this.props.student.name}</div>
                <div> {this.props.student.lastName} </div>
                <a href={this.props.student.link} target="_blank">{this.props.student.link}</a>
              </div>
            )}
      </li>

    )
  }
}
