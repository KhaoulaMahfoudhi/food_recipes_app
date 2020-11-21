const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/passport-jwt');
const {
  myprofile,
  profile,
  showProfile,
  showoneProfile,
  deleteprofile,
} = require('../controllers/profile.controller');
const { validator, ProfileRules } = require('../middleware/validator');

router.get('/myProfile', isAuth(), myprofile);
router.post('/profile', isAuth(), ProfileRules(), validator, profile);
router.get('/showProfile', showProfile);
router.get('/showProfile/:user_id', showoneProfile);
router.delete('/deleteProfile', isAuth(), deleteprofile);
module.exports = router;
