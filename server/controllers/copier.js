const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/passport-jwt');
const { check, validationResult } = require('express-validator');
const User = require('../Models/User');
const Profile = require('../Models/Profile');
router.get('/myProfile', isAuth(), async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['FirstName', 'LastName']);
    if (!profile) {
      res.status(400).json({ msg: 'There is no profile foor this user' });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json('Server error');
  }
});

router.post(
  '/profile',
  [
    isAuth(),
    [
      check('FirstName', 'FirstName is required').not().isEmpty(),
      check('LastName', 'LastName is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      FirstName,
      LastName,
      PhoneNumber,
      image,
      bio,
      youtube,
      instagram,
      facebook,
    } = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;
    if (FirstName) profileFields.FirstName = FirstName;
    if (LastName) profileFields.LastName = LastName;
    if (PhoneNumber) profileFields.PhoneNumber = PhoneNumber;
    if (image) profileFields.image = image;
    if (bio) profileFields.bio = bio;
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (facebook) profileFields.social.facebook = facebook;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errprs: 'server error' });
    }
  }
);

//Get all profile
router.get('/showProfile', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'FirstName',
      'LastName',
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errprs: 'server error' });
  }
});

//Get user profile
router.get('/showProfile/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['FirstName', 'LastName']);
    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).json({ errprs: 'server error' });
  }
});

//delete profile
router.delete('/deleteProfile', isAuth(), async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'profile removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errprs: 'server error' });
  }
});

module.exports = router;
