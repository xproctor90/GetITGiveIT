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
 


        surveyAnswers.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
            surveyAnswers.belongsTo(models.user, {
                foreignKey: {
                allowNull: false
             }
            });
         };

  
    return surveyAnswers;
 
}

