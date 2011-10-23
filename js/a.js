cooking.displayAnimation = function(animation,step) {   
    if(animation[step]) {
        toolEl = document.createElement('img');
        toolEl.setAttribute('src', 'tools/' + animation[step].image);
        toolEl.setAttribute('class', 'animation');
        toolEl.style.top = animation[step].start.y + '%';  
        toolEl.style.left = animation[step].start.x + '%';  
        toolEl.style.width = animation[step].size.x + "%" ;  
        toolEl.style.height = animation[step].size.y + '%';
        document.body.appendChild(toolEl);
        var nextStep = step + 1;
        setTimeout(function(){cooking.displayAnimation(animation,nextStep)}, animation[step].time);
        return true;
    }
    cooking.displayLevelContinue(); 
}

cooking.moveMe = function(e) {
    e.preventDefault();
    var orig = e.originalEvent;
    try{
        var top = parseInt(orig.changedTouches[0].pageY);     
    } catch(e) {
        return false;
    }
    var left = parseInt(orig.changedTouches[0].pageX);

    var topStop = this.getAttribute('topStop'); 
    var minTopStop = 0.98 * parseInt(topStop);
    var maxTopStop = 1.02 * parseInt(topStop);

    var leftStop = this.getAttribute('leftStop'); 
    var minLeftStop = 0.98 * parseInt(leftStop);
    var maxLeftStop = 1.02 * parseInt(leftStop);
    
    $(this).css({
      top: top + 'px',
      left: left + 'px'
    });

    if(top > minTopStop && top < maxTopStop && left > minLeftStop && left < maxLeftStop) {
        $(this).unbind().removeAttr('topStop').css('z-index',-50);
        $('#' + this.id + 'Target').remove();
    }

    if(!$("[topStop]").length) {
       cooking.step++;
       cooking.displayLevel();         
    }
};

cooking.displayLevel = function(){ 
    step = cooking.step;
    recipe = cooking.recipe;
    // remove not needed elements
    if(step > 0) {
        prevStep = step - 1;
        remove = recipe.steps[prevStep].remove;
        if(typeof remove == 'object') {
            for (var i=0, len=remove.length; i<len; ++i ){
                $('#' + remove[i]).remove();
            }
        }
    }
    
    // display animation
    if(typeof recipe.steps[step].animation == 'object') {
        console.log('display animation');
        animation = recipe.steps[step].animation;
        cooking.displayAnimation(animation,0);
        return true;
    }
    cooking.displayLevelContinue();
}

cooking.displayLevelContinue = function(){ 
    step = cooking.step;
    recipe = cooking.recipe;

    document.getElementById('instruction').innerHTML = recipe.steps[step].instruction;

    tools = recipe.steps[step].tools;
    for (var i=0, len=tools.length; i<len; ++i ){
        // tool
        toolEl = document.createElement('img');
        toolEl.setAttribute('src', 'tools/' + tools[i].image);
        toolEl.setAttribute('id',tools[i].id);
        toolEl.setAttribute('class', 'tool');
        toolEl.style.top = tools[i].start.y + '%';  
        toolEl.style.left = tools[i].start.x + '%';  
        toolEl.style.width = tools[i].size.x + "%" ;  
        toolEl.style.height = tools[i].size.y + '%';
        toolEl.setAttribute('topStop',(tools[i].stop.y / 100 * window.innerHeight) + 'px');  
        toolEl.setAttribute('leftStop',(tools[i].stop.x / 100 * window.innerWidth) + 'px');  
        toolEl.addEventListener('click',cooking.moveMe);  
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

    $("[topStop]").bind("touchstart touchmove", cooking.moveMe);
}

cooking.gameStart = (function(){
    cooking.recipe = cooking.recipe1;
    cooking.step = 2;
    cooking.displayLevel();
})();
