const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
  schema: new Schema({
    name: String,
    title: String,
    description: String,
    type: String,
    duration: String,
    tags: [String]
  })
};
