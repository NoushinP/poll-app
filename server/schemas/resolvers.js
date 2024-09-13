const { Choice, Question } = require('../models');

const resolvers = {
  Query: {
    questions: async () => {
      return await Question.find({}).populate('choices');
// return await Professor.find({}).populate('classes')
  
    },
    choices: async () => {
      return Choice.find();
    },

  }
}
module.exports = resolvers;



