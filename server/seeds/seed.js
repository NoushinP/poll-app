const db = require('../config/connection');
const { Question, Choice } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Profile', 'profiles');
    
    await Profile.create(profileSeeds);
const beverageQuestion = Question.create({name: "Best drink", choices: []})
const bevChoice1 = Choice.create({name: 'Coke', responses:0})
const bevChoice2 = Choice.create({name: 'Pepsi', responses:0})
const bevChoice3 = Choice.create({name: 'Sprite', responses:0})
const bevChoice4 = Choice.create({name: 'Other', responses:0})
beverageQuestion.choices.push(bevChoice1._id, bevChoice2._id, bevChoice3._id, bevChoice4._id)

const sportsQuestion = Question.create({name: "Favorite sports", choices: []})
const sportsChoice1 = Choice.create({name: 'Baseball', responses:0})
const sportsChoice2 = Choice.create({name: 'Soccer', responses:0})
const sportsChoice3 = Choice.create({name: 'Tennis', responses:0})
const sportsChoice4 = Choice.create({name: 'Hockey', responses:0})
sportsQuestion.choices.push(sportsChoice1._id, sportsChoice2._id, sportsChoice3._id, sportsChoice4._id)

const movieQuestion = Question.create({name: "Favorite Movie", choices: []})
const movieChoice1 = Choice.create({name: 'Mighty Ducks', responses:0})
const movieChoice2 = Choice.create({name: 'Natural', responses:0})
const movieChoice3 = Choice.create({name: 'Fever Pitch', responses:0})
const movieChoice4 = Choice.create({name: 'lot', responses:0})
movieQuestion.choices.push(movieChoice1._id, movieChoice2._id, movieChoice3._id, movieChoice4._id)

const holidayQuestion = Question.create({name: "Favorite Destination", choices: []})

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
