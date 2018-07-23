function getTags(str) {
    return str.split(' ');
}

module.exports = (config) => {
  const actions = require('./actions')(config)
  
  return {
    useRoutes: (app) => {
      /**
       * @api {get} /assignments/?tag=:tag
       * @apiNmae GetAssignmentsByTag
       * @apiGroup Assignment
       * 
       * @apiParam {String} tag Tag on assignment
       * 
       * @apiSuccess {String} name Name of the assignment.
       * @apiSuccess {String} title Title of the assignment.
       * @apiSuccess {String} description Description of the assignment.
       * @apiSuccess {String} type Type of the assignment.
       * @apiSuccess {[String]} tags Tags on the assignment.
      */
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
  
      /**
       * @api {get} /assignments/:id
       * @apiNmae GetAssignmentById
       * @apiGroup Assignment
       * 
       * @apiParam {String} id ID of the assignment
       * 
       * @apiSuccess {String} name Name of the assignment.
       * @apiSuccess {String} title Title of the assignment.
       * @apiSuccess {String} description Description of the assignment.
       * @apiSuccess {String} type Type of the assignment.
       * @apiSuccess {[String]} tags Tags on the assignment.
      */
     app.get('/assignments/:id', (req, res) => {
        const id = req.params['id'];
        actions.getAssignment(id)
          .then((data) => {
            if(data) {
              res.json(data)
            } else {
              res.status(404).send('Assignment not found.') 
            }
          })
          .catch((err) => res.status(500).send(err))
      });
  
    /**
     * @api {post} /assignments/
     * @apiNmae CreateAssignment
     * @apiGroup Assignment
     * 
     * @apiParam {String} name Name of the assignment.
     * @apiParam {String} title Title of the assignment.
     * @apiParam {String} description Description of the assignment.
     * @apiParam {String} type Type of the assignment.
     * @apiParam {[String]} tags Tags on the assignment.
     * 
     * @apiSuccees {String} id ID of the assignment
    */
    app.post('/assignments', (req, res) => {
      const newAssignment = {
        name: req.params['name'],
        title: req.params['title'],
        description: req.params['description'],
        type: req.params['type'],
        duration: req.params['duration'],
        tags: getTags(req.params['tags'])
      }

      actions.createAssignment(newAssignment)
        .then((assignment) => res.json({id: assignment.id}))
        .catch((err) => res.status(500).send(err))
      });
    }
  }
}
