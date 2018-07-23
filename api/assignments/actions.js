const connect = require('./schema');

module.exports = (config) => ({
  createAssignment: (assignment) => {
    return connect(config)
      .then((db) => {
        const newAssignment = new db.Assignment(assignment);
        return newAssignment.save;
      });
  },
  getAssignment: (id) => {
    return connect(config)
      .then((db) => db.Assignment.findById(id));
  },
  getAssignments: (tag) => {
    return connect((config)
      .then((db) => db.Assignment.find({ tag }))
    )
  }
});
