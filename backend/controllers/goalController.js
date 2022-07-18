// @desc    Get goals
// @route   GET /api/goal
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc    Set goal
// @route   POST /api/goal
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add a text field" });
  }
  res.status(200).json({ message: "Set Goal" });
};

// @desc    Update goal
// @route   PUT /api/goal/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELETE /api/goal/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
