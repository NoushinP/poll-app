const { Choice, Question } = require('../models');

const resolvers = {
  Query: {
    questions: async () => {
      return await Question.find({}).populate('choices');
  
    },
  }
}
module.exports = resolvers;



