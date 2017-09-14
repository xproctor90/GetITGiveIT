module.exports = function(sequelize, Sequelize) {
 
    var choices = sequelize.define('choices', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        surveyQuestionId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },

        choice: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        grouponLabel: {
            type: Sequelize.STRING,
            notEmpty: true
        }

    });
 
    return choices;
 
}