module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('surveyQuestions', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        question: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
 
    return surveyQuestions;
 
}