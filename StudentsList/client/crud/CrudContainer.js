// import { Template } from "meteor/templating";
import React, { Component } from 'react';
import Crud from './Crud';

// import students from "../imports/db/students";
//
//
// Template.form.events
// (
//     {
//         "click #submit" : function( event, template )
//         {
//             students.insert
//             (
//                 {
//                     name : template.find( "#name" ).value,
//                     lastName : template.find( "#lastName" ).value,
//                     link : template.find( "#link" ).value
//                 }
//             )
//         }
//
//     }
// )
class CrudContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: null,
      lastName: null,
      link: null
    }
  }

  render(){

  }

  return(
    <Crud
      // categoryName={this.state.category.name}
    />
  )

}

export default CrudContainer;
