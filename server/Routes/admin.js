const express = require('express');
const {
  Adminregister,
  Adminlogin,
  Adminminroot,
} = require('../controllers/admin.controller');
const {
  validator,
  RegisterRules,
  LoginRules,
} = require('../middleware/validator');

const router = express.Router();
router.get('/', Adminminroot);
router.post('/Adminregister', RegisterRules(), validator, Adminregister);
router.post('/Adminlogin', LoginRules(), validator, Adminlogin);
module.exports = router;
