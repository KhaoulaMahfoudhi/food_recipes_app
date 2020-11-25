const express = require('express');
const {
  register,
  login,
  showUsers,
  editUser,
  deleteUser,
  minroot,
} = require('../controllers/user.controller');
const {
  validator,
  RegisterRules,
  LoginRules,
} = require('../middleware/validator');
const isAuth = require('../middleware/passport-jwt');

const router = express.Router();
router.get('/api', isAuth(), minroot);
router.post('/api/register', RegisterRules(), validator, register);
router.post('/api/login', LoginRules(), validator, login);
router.get('/api/showUsers', isAuth(), showUsers);
router.put('/api/editUser/:_id', isAuth(), editUser);
router.delete('/api/deleteUser/:_id', isAuth(), deleteUser);
module.exports = router;
