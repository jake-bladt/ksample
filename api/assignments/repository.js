const schema = require('./schema');
const Assignment = schema.Assignment;

module.exports = (config) => ({
  createAssignment: (assignment) => {
    const newAssignment = new Assignment(assignment);
    return newAssignment.save;
  },
  getAssignment: (id) => {
    return Assignment.findById
  },
  getAssignments: (tag) => {
    
  }
});
