cooking.displayLevel = function(recipe,step){ 
  
    document.getElementById('instruction').innerHTML = recipe.steps[step].instruction;

    tools = recipe.steps[step].tools; 
    for (var i=0, len=tools.length; i<len; ++i ){
        console.dir(tools[i]);
    }

}

cooking.displayLevel(cooking.recipe1,0);

