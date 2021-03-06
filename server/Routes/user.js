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
router.get('/login/', isAuth(), minroot);
router.post('/register', RegisterRules(), validator, register);
router.post('/login', LoginRules(), validator, login);
router.get('/showUsers', showUsers);
router.put('/editUser/:_id', editUser);
router.delete('/deleteUser/:_id', deleteUser);
module.exports = router;
