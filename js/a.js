cooking.displayLevel = function(recipe,step){ 
  
    document.getElementById('instruction').innerHTML = recipe.steps[step].instruction;

    tools = recipe.steps[step].tools;
    var toolElement;
    for (var i=0, len=tools.length; i<len; ++i ){
        // tool
        toolEl = document.createElement('img');
        toolEl.setAttribute('src', tools[i].image);
        toolEl.setAttribute('class', 'tool');
        toolEl.setAttribute('id',tools[i].id);
        toolEl.style.top = tools[i].start.y + '%';  
        toolEl.style.left = tools[i].start.x + '%';  
        toolEl.style.width = tools[i].size.x + "%" ;  
        toolEl.style.height = tools[i].size.y + '%';  
        document.body.appendChild(toolEl);

        // target for tool
        toolEl = document.createElement('div');
        toolEl.setAttribute('class', 'toolTarget');
        toolEl.setAttribute('id',tools[i].id + "Target");
        toolEl.style.top = tools[i].stop.y + '%';  
        toolEl.style.left = tools[i].stop.x + '%';  
        toolEl.style.width = tools[i].size.x + "%" ;  
        toolEl.style.height = tools[i].size.y + '%';  
        document.body.appendChild(toolEl);
    }

}

cooking.gameStart = (function(){ 
    cooking.viewportwidth = window.innerWidth,
    cooking.viewportheight = window.innerHeight

    cooking.displayLevel(cooking.recipe1,0);
})();

