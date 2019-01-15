import React, { Component } from 'react';

// Students component - represents a single todo item
export default class Student extends Component {
  render() {
    return (
      <li>{this.props.student.text}</li>
    );
  }
}
