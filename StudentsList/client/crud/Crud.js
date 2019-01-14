// import { Template } from "meteor/templating";
import React, { Component } from 'react';

const click = () => {
  console.log('click');
}
const Crud = () => (
  <section className="App">
        <input type = "text" placeholder = "Votre nom"  className = "formfield"  />
        <input type = "text" placeholder = "Votre prénoms"  className = "formfield"  />
        <input type = "text" placeholder = "Lien GIT"  className = "formfield"  />
        <button onClick = {click} className = "myButton" > Soumettre </ button>
  </section>
)


export default Crud;

//
// <template name="form">
//     <input type="text" id="name" placeholder="Prénom">
//     <input type="text" id="lastName" placeholder="Nom">
//     <input type="text" id="link" placeholder="GitHub">
//     <button  id="submit">AJOUTER</button>
// </template>
