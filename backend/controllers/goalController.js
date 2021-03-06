const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");
// @desc    Get goals
// @route   GET /api/goal
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

// @desc    Set goal
// @route   POST /api/goal
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text fieldsss");
  }
  res.status(200).json({ message: "Set Goal" });
});

// @desc    Update goal
// @route   PUT /api/goal/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/goal/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
