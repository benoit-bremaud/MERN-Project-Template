const userService = require('../services/userService');
const { userValidation, updateUserValidation } = require('../validations/userValidation');

exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}