const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  title: String,
  description: String,
  type: String,
  duration: String,
  tags: [String]
});

const Assignment = mongoose.model(schema, 'assignment');
module.exports = { schema, Assignment };
