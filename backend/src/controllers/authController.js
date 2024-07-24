const authService = require('../services/authService');
const { signupValidation, loginValidation } = require('../validations/authValidation');

exports.signup = async (req, res) => {
  // Validate the data before creating a user
  const { error } = signupValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const user = authService.signup(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  // Validate the data before logging ins
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const token = authService.login(req.body);
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Logout controller
exports.logout = async (req, res) => {
  try {
    authService.logout(req.user);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
