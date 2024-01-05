var DataSource = require("typeorm"); // eslint-disable-line
var ds = new DataSource(require("./ormconfig"));
module.exports = ds;