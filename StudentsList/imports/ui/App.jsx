import React, { Component, Fragment } from 'react';
// import { Template } from "meteor/templating";
import Crud from '../../client/crud/Crud';

// const App = () => (
//   <div>
//     <Crud />
//   </div>
// );
//
// export default App;

import { withTracker } from 'meteor/react-meteor-data';
import { Students } from '../api/students.js'
import Student from './Student.js';

// App component - represents the whole app
class App extends Component {

  renderStudents() {
    return this.props.students.map((students) => (
      <Students key={student._id} student={student} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
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
