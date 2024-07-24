const Joi = require('joi');

const updateUserValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3),
    email: Joi.string().email()
  });
  return schema.validate(data);
};

module.exports = { updateUserValidation };
