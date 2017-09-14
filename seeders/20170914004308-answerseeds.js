'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('surveyAnswers', [{
        id: 1,
        userId: 1,
        surveyQuestionId: 1,
        response: "electronics",
        createdAt: new Date(),
        updatedAt: new Date()
       }],
       {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('surveyAnswers', [{
         id: 1
    }],
    {});
  }
};
