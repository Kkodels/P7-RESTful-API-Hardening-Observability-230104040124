const employees = require('../data/employees.data');
const { success, fail } = require('../utils/apiResponse');

exports.getAll = (req, res) => {
  success(res, "All employees fetched", employees);
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(e => e.id === id);

  if (!employee) return fail(res, "Employee not found", 404);
  success(res, "Employee found", employee);
};

exports.create = (req, res) => {
  const { name, position, salary } = req.body;
  const newEmployee = { id: Date.now(), name, position, salary };
  employees.push(newEmployee);
  res.status(201).json({
    status: "success",
    message: "Employee created successfully",
    data: newEmployee
  });
};

exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(e => e.id === id);

  if (index === -1) return fail(res, "Employee not found", 404);

  const { name, position, salary } = req.body;
  employees[index] = { id, name, position, salary };

  success(res, "Employee updated successfully", employees[index]);
};

exports.delete = (req, res) => {
  const id = parseInt(req.params.id);
  const index = employees.findIndex(e => e.id === id);

  if (index === -1) return fail(res, "Employee not found", 404);

  employees.splice(index, 1);
  res.status(204).send();
};
