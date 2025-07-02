// app.js

async function showRecipes() {
  const list = document.getElementById("recipe-list");
  const recipes = await getRecipes();

  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" width="300">
      <p>${recipe.description}</p>
      <a href="recipe.html?id=${recipe.id}">View Recipe</a>
      <hr>
    `;
    list.appendChild(div);
  });
}

showRecipes();
