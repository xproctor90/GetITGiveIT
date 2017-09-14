var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(process.env.JAWSDB_URL);
}else {
    var sequelize = new Sequelize("getgift_db", process.env.GIFTDBUSERNAME || "root", process.env.GIFTDBPW|| "chen87221", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

}

module.exports = sequelize;