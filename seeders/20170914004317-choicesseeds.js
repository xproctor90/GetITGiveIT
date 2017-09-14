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
    return queryInterface.bulkInsert('choices', [{
        id: 1,
        surveyQuestionID: 1,
        choice: "technology",
        grouponLabel: "electronics",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 2,
        surveyQuestionID: 1,
        choice: "going out",
        grouponLabel: "things-to-do",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        id: 3,
        surveyQuestionID: 1,
        choice: "sports",
        grouponLabel: "sports-and-outdoors",
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
    return queryInterface.bulkDelete('choices', [{
         
    }],
    {});
  }
};
