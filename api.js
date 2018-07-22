const app = require('express')();
const bodyParser = require('body-parser');

// configuration with secrets
const config = require('./config/config');
const secrets = require('./config/secret.config');
secrets.apply(config);

// parse requests correctly.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// attach routes.
const routes = require('./api/assignments/routes')(config);
routes.useRoutes(app);

// Default endpoint
app.get('/', (req, res) => {
  res.json({"msg": "greetings."});
});

// start the server
app.listen(config.serverPort, () => {
  console.log(`App listening on port ${config.serverPort}.`);
});
