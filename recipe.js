'use strict';

function addIngredient(object, ingredient, amount) {
  object[ingredient] = amount ;
  return object ;
}

function removeIngredient(recipe, ingredient) {
  delete recipe[ingredient] ;
  return recipe ;
}

function updateIngredient(object, ingredient, amount) {
  object[ingredient] = amount ;
  return object ;
}

function readRecipe(recipe) {
  for (var key in recipe) {
    console.log("This recipe calls for " + recipe[key] + " of " + key)
  }
}