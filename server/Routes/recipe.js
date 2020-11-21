const express = require('express');
const {
  addRecipe,
  showRecipes,
  showOneRecipe,
  editRecipe,
  deleteRecipes,
  likeRecipe,
  unlikeRecipe,
} = require('../controllers/recipe.controller');
const { validator, RecipeRules } = require('../middleware/validator');
const isAuth = require('../middleware/passport-jwt');

const router = express.Router();

router.post('/addrecipe', isAuth(), RecipeRules(), validator, addRecipe);
router.get('/showRecipes', showRecipes);
router.get('/onerecipe/:id', isAuth(), showOneRecipe);
router.put('/updateRecipe/:id', isAuth(), editRecipe);
router.delete('/deleteRecipe/:id', isAuth(), deleteRecipes);
router.put('/likeRecipe/:id', isAuth(), likeRecipe);
router.put('/unlikeRecipe/:id', isAuth(), unlikeRecipe);
module.exports = router;
