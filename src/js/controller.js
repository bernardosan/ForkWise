import * as model from './model.js'
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime'

const controlRecipe = async function () {
  try {

    //Receive the id from the URL hash
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return; // safeguard for no id received
    recipeView.renderSpinner; // spinner for loading data

    // 1) Loading
    await model.loadRecipe(id);

    // 2) Rendering 
    recipeView.render(model.state.recipe)

  } catch (err) {
    console.error(err);
  }
};

controlRecipe();

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
