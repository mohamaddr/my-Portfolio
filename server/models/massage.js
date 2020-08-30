var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var massageSchema = new Schema({
  name: { type: String },
  email: { type: String },
  subject: { type: String },
  massage: { type: String }
});

module.exports = mongoose.model("massages", massageSchema);
