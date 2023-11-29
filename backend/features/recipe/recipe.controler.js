const { Recipe, Categories, Ingredients } = require("./recipe.model");

const getRecipe = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};
const getIngredients = async (req, res, next) => {
  try {
    const igredients = await Ingredients.find();
    res.status(200).json({ igredients });
  } catch (error) {
    next(error);
  }
};
// xsx

const getOneRecipe = async (req, res, next) => {
  try {
    const category = req.params.category;
    const recipes = await Recipe.find({ category });

    if (!recipes) {
      return res.status(404).json({ message: "error" });
    }

    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};

const getOneRecipeById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("id zconrolera", id);
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "error" });
    }

    res.status(200).json({ recipe });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  getOneRecipe,
  getRecipe,
  getIngredients,
  getOneRecipeById,
};
