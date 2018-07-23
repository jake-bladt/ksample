const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (config) => () => {
  
    return mongoose.connect(config.dbConnectString)
      .then(() => {
        const schema = new Schema({
            name: String,
            title: String,
            description: String,
            type: String,
            duration: String,
            tags: [String]
          });
          
        const Assignment = mongoose.model(schema, 'assignment');
        return Promise.resolve({ schema, Assignment });
      })
      .catch((err) => {
        return Promise.resolve({ serverError: 500, errorMessage: 'Failed to connect to database.'})
      })

};


