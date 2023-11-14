const express = require("express");
const {
  getRecipe,
  getCategories,
  getOneRecipe,
  getOneRecipeById,
  getIngredients,
} = require("./recipe.controler");
const router = express.Router();

router.get("/recipes/category-list", getCategories);
router.get("/recipes/", getRecipe);
router.get("/recipes/:category", getOneRecipe);
router.get("/recipe/:id", getOneRecipeById);
router.get("/ingredients", getIngredients);

module.exports = router;
