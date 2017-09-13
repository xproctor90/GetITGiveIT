module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('surveyAnswers', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        questionOne: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        questionTwo: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        questionThree: {
            type: Sequelize.STRING
        },
 
        questionFour: {
            type: Sequelize.STRING
        },
 
        questionFive: {
            type: Sequelize.STRING,
        }
    });
 
    return surveyAnswers;
 
}