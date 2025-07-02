// storage.js


function saveRecipes(recipes) {
  localStorage.setItem("recipeBook_recipes", JSON.stringify(recipes));
}

function getRecipeById(id) {
  const recipes = JSON.parse(localStorage.getItem("recipeBook_recipes")) || [];
  return recipes.find(r => r.id == id);
}
