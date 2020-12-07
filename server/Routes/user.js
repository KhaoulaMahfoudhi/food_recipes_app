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
router.get('/showUsers', isAuth(), showUsers);
router.put('/editUser/:_id', isAuth(), editUser);
router.delete('/deleteUser/:_id', isAuth(), deleteUser);
module.exports = router;
