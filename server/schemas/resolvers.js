const { Choice, Question } = require('../models');

const resolvers = {
  Query: {
    questions: async () => {
        return Question.find();
  },

    choices: async () => {
      return Choice.find();
    },
  }
}
module.exports = resolvers;

