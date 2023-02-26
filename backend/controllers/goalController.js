//Get goals GET
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//Set goals POST
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Set goals" });
};

//Update goals PUT
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
};

//Delete goals DELETE
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
