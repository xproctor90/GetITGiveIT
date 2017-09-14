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
    return queryInterface.bulkInsert('users', [{
        firstname: 'John',
        lastname: 'Doe',
        username: 'johndoe123',
        about: 'nobody really knows me',
        email: 'johndoe@johndoe.gov',
        password: 'doe',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'Brad',
        lastname: 'Brandhorst',
        username: 'bradb123',
        about: "I'm in ur base",
        email: 'bradbrandhorst@gmail.com',
        password: 'brad',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      firstname: 'Xavier',
        lastname: 'Proctor',
        username: 'xavierp123',
        about: "give me a gift!",
        email: 'xavier@proctor.com',
        password: 'xav',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }], 
      {});

    //return queryInterface.bulkInsert('surveyQuestions', [{
      //  question: "What's your name?"
       // }],
        //{});

    //return queryInterface.bulkInsert('surveyAnswerss', [{
      //  question: "What's your name?"
        //}],
        //{});

  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', [{
         
    }],
    {});
  }
};
