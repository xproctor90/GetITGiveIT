module.exports = function(sequelize, Sequelize) {
 
    var surveyAnswers = sequelize.define('surveyAnswers', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
 
        surveyQuestionId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        response: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
 
    return surveyAnswers;
 
}