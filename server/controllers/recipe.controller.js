const Recipe = require('../Models/Recipe');
const Profile = require('../Models/Profile');
const User = require('../Models/User');

exports.addRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const NewRecipe = new Recipe({
      title: req.body.title,
      FirstName: user.FirstName,
      image: req.body.image,
      ingredients: req.body.image,
      description: req.body.image,
      user: req.user.id,
    });
    const recipe = await NewRecipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: 'Recipe not added', err });
  }
};
exports.showRecipes = async (req, res) => {
  try {
    const getRecipes = await Recipe.find().sort({ date: -1 });
    res.status(201).json(getRecipes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: err });
  }
};

exports.showOneRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    res.status(201).json(recipe);
  } catch (err) {
    console.log(err);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    res.status(500).json({ errors: err });
  }
};

exports.editRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    //check in user
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }
    await recipe.updateOne({ $set: req.body });
    await res.status(201).json({ msg: ' Recipe updated' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    res.status(500).json({ errors: err });
  }
};

exports.deleteRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    //check in user : the user how own the post his the onlu one can deleted
    if (recipe.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'not authorized' });
    }
    await recipe.remove();
    await res.status(201).json({ msg: ' Recipe Deleted' });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'recipe not found' });
    }
    res.status(500).json({ errors: err });
  }
};

//like recipe

exports.likeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    //check for like
    if (
      recipe.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: 'recipe already liked' });
    }
    recipe.likes.unshift({ user: req.user.id });
    await recipe.save();
    res.json(recipe.likes);
  } catch (err) {
    res.status(500).json({ errors: err });
  }
};

exports.unlikeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    //check for like
    if (
      recipe.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'recipe has not yeet been liked' });
    }
    const removeIndex = recipe.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);
    recipe.likes.splice(removeIndex, 1);
    await recipe.save();
    res.json(recipe.likes);
  } catch (err) {
    res.status(500).json({ errors: err });
  }
};
