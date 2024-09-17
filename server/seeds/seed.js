const db = require('../config/connection');
const { Question, Choice } = require('../models');
const cleanDB = require('./cleanDB');
db.once('open', async () => {
  try {
    await cleanDB('Choice', 'choices');
    await cleanDB('Question', 'questions');
const beverageQuestion = await Question.create({name: "Best drink", choices: []})
const bevChoice1 = await Choice.create({name: 'Coke', responses:0})
const bevChoice2 = await Choice.create({name: 'Pepsi', responses:0})
const bevChoice3 = await Choice.create({name: 'Sprite', responses:0})
const bevChoice4 = await Choice.create({name: 'Other', responses:0})
beverageQuestion.choices.push(bevChoice1._id, bevChoice2._id, bevChoice3._id, bevChoice4._id)
await beverageQuestion.save()
const sportsQuestion = await Question.create({name: "Favorite sports", choices: []})
const sportsChoice1 = await Choice.create({name: 'Baseball', responses:0})
const sportsChoice2 = await Choice.create({name: 'Soccer', responses:0})
const sportsChoice3 = await Choice.create({name: 'Tennis', responses:0})
const sportsChoice4 = await Choice.create({name: 'Hockey', responses:0})
sportsQuestion.choices.push(sportsChoice1._id, sportsChoice2._id, sportsChoice3._id, sportsChoice4._id)
await sportsQuestion.save()
const movieQuestion = await Question.create({name: "Favorite Movie", choices: []})
const movieChoice1 = await Choice.create({name: 'Mighty Ducks', responses:0})
const movieChoice2 = await Choice.create({name: 'Natural', responses:0})
const movieChoice3 = await Choice.create({name: 'Fever Pitch', responses:0})
const movieChoice4 = await Choice.create({name: 'Sandlot', responses:0})
movieQuestion.choices.push(movieChoice1._id, movieChoice2._id, movieChoice3._id, movieChoice4._id)
await movieQuestion.save()
// const holidayQuestion = Question.create({name: "Favorite Destination", choices: []})
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});