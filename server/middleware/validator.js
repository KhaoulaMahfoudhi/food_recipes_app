const { check, validationResult } = require('express-validator');

exports.RecipeRules = () => [
  check('title', 'This field is required').notEmpty(),
  check('FirstName', 'This field is required').notEmpty(),
  check('ingredients', 'This field is required').notEmpty(),
  check('description', 'This field is required').notEmpty(),
  check('image', 'This field is required').notEmpty(),
];
exports.RegisterRules = () => [
  check('FirstName', 'This field is required').notEmpty(),
  check('LastName', 'This field is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 5 or more charachter'
  ).isLength({ min: 6 }),
];

exports.LoginRules = () => [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
