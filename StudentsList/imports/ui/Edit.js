import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Students from "../api/students";


export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      student: []
    })
  }

  getUserId(id) {
    const student = Students.find({
      _id: id
    }).fetch()
    return student;
  }

  async componentWillMount() {
    const student = await getUserId(this.props.match.params._id)
    this.setState({
      student
    })
  }

  // ref input values
  newNameRef = React.createRef();
  newLastNameRef = React.createRef();
  newLinkRef = React.createRef();


  updateData = () => {
    event.preventDefault()

    Students.update (
      this.state.student[0]._id, {
        $set : {
          name: this.newNameRef.current.value.trim(),
          lastName: this.newLastNameRef.current.value.trim(),
          link: this.newLinkRef.current.value.trim()
        }
      }
    );
    this.props.history.push(`/`);
  }

  render() {
    return(
      this.state.student.length > 0 && (
        <form className="addForm">
          <div className="addInputs">
            <div>
              <input className="addInput" ref={this.newNameRef} type="text" defaultValue={this.state.student[0].name} />
            </div>
            <div>
              <input className="addInput" ref={this.newLastNameRef} type="text" defaultValue={this.state.student[0].lastName} />
            </div>
            <div>
              <input className="addInput" ref={this.newLinkRef} type="text" defaultValue={this.state.student[0].link} />
            </div>
          </div>
          <div className="buttons">
            <button className="modify" onClick={this.updateData}>Valider</button>
            <a className="delete" href="/">Annuler</a>
          </div>
        </form>
      )
    )
  }
}
