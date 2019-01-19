import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Students = new Mongo.Collection('students');

Meteor.methods({
  'students.insert'({name, lastName, link}) {
    check(name, lastName, link, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Students.insert({
      name,
      lastName,
      link,
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'students.remove'(studentId) {
    // check(studentId, String);

    Students.remove(studentId);
  },
  'students.update'({studentId, name, lastName, link}) {
    // check(studentId, String);
    check(name, String);
    check(lastName, String);
    check(link, String);

    Students.update(studentId, { $set: { name, lastName, link} });
  },
});
