const Admin = require('../Models/Admin');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const secretOrKey = config.get('secretOrKey');
const bcrypt = require('bcryptjs');

exports.Adminminroot = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (err) {
    res.status(500).json({ msg: 'server error' });
  }
};
exports.Adminregister = async (req, res) => {
  const { FirstName, LastName, email, password } = req.body;
  const searchAdmin = await Admin.findOne({ email });
  if (searchAdmin)
    return res
      .status(400)
      .json({ errors: [{ msg: 'admin already registered' }] });
  try {
    const newAdmin = new Admin({
      FirstName,
      LastName,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newAdmin.password = await bcrypt.hash(password, salt);
    await newAdmin.save(newAdmin);
    const payload = {
      id: newAdmin._id,
      FirstName: newAdmin.FirstName,
      LastName: newAdmin.LastName,
      email: newAdmin.email,
    };
    const token = await jwt.sign(payload, secretOrKey, { expiresIn: 3600 });
    res.status(201).json({ token: `Bearer ${token}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: 'User not added', err });
  }
};

exports.Adminlogin = async (req, res) => {
  const { password, email } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ msg: 'bad Credentials' });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(404).json({ msg: 'bad Credentials' });
    const payload = {
      id: admin._id,
      FirstName: admin.FirstName,
      LastName: admin.LastName,
      email: admin.email,
    };
    const token = await jwt.sign(payload, secretOrKey, { expiresIn: 3600 });
    res.status(201).json({ token: `Bearer ${token}` });
  } catch (err) {
    res.status(500).json({ errors: err });
  }
};

exports.showUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(201).json(getUsers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: err });
  }
};

exports.deleteUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id });
    await res.status(201).json({ msg: ' User Deleted' });
  } catch (err) {
    res.status(500).json({ errors: err });
  }
};
