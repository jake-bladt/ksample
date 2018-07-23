function getTags(str) {
    return str.split(' ');
}

module.exports = (config) => {
  const actions = require('./actions')(config)
  
  return {
    useRoutes: (app) => {
      app.get('/assignments/', (req, res) => {
          const tag = req.params['tag'];
          if(tag) {
            actions.getAssignments(tag)            
              .then((data) => res.json(data))
              .catch((err) => res.status(500).send(err))
          } else {
            res.status(404).send('No assignments found.');
          }
      });
  
      app.get('/assignments/:id', (req, res) => {
        const id = req.params['id'];
        action.getAssignment(id)
          .then((data) => {
            if(data) {
              res.json(data)
            } else {
              res.status(404).send('Assignment not found.') 
            }
          })
          .catch((err) => res.status(500).send(err))
      });
  
      app.post('/assignments', (req, res) => {
        const newAssignment = {
            name: req.params['name'],
            title: req.params['title'],
            description: req.params['description'],
            type: req.params['type'],
            duration: req.params['duration'],
            tags: getTags(req.params['tags'])
        }
      });
    }
  }
}
