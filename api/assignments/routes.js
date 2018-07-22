const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => ({
  useRoutes: (app) => {
    app.get('/assignments/', (req, res) => {
      mongoose.connect(config.dbConnectString)
        .then(() => {
          console.log("Successfully connected to the database");
        })
        .catch((err) => {
          console.log('Failed to connect to DB.');
          console.log(err);
        })

        res.json({'db': 'mongo'});
    });

    app.get('/assignments/{id}', (req, res) => {

    });

    app.post('/assignments', (req, res) => {

    });
  }
});

