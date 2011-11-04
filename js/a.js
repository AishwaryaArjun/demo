window.onload = onLoad;

function onLoad(){
    document.body.ontouchmove = function(e) {e.preventDefault()};
	document.body.style.height = (window.innerHeight +100 ) + 'px';
    setTimeout(function() {
		window.scrollTo(0, 1);
		cooking.gameStart() 
	},100);
}

cooking.gameEnd = function() {
   $("#kitchen, #table").hide();
   $(".tool, .animation, .toolTarget").remove(); 
   $("h1").text(cooking.recipe.gameEnd.text);
   $("#gameEnd").attr('src','tools/' + cooking.recipe.gameEnd.image); 
}

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

cooking.toolMove = function(e) {
    e.preventDefault();
    var orig = e.originalEvent;
    var eventType = orig.type;

    try{
        var top = parseInt(orig.changedTouches[0].pageY);     
    } catch(e) {
        return false;
    }
    var left = parseInt(orig.changedTouches[0].pageX);

    var dropMarginY = cooking.dropMarginY;
    var dropMarginX = cooking.dropMarginX;
    if(eventType === 'touchend') {
        var dropMarginY = cooking.dropMarginYTouchend;
        var dropMarginX = cooking.dropMarginXTouchend;
    }

    var topStart = this.getAttribute('topStart'); 
    var topStop = parseInt(this.getAttribute('topStop')); 
    var minTopStop = parseInt(topStop) - dropMarginY;
    var maxTopStop = parseInt(topStop) + dropMarginY;

    var leftStart = this.getAttribute('leftStart'); 
    var leftStop = this.getAttribute('leftStop'); 
    var minLeftStop = parseInt(leftStop) - dropMarginX;
    var maxLeftStop = parseInt(leftStop) + dropMarginX;
    
    if(top > minTopStop && top < maxTopStop && left > minLeftStop && left < maxLeftStop) {
        $(this).css({
          top: topStop,
          left: leftStop
        }).unbind().removeAttr('topStop').css('z-index',-50);
        $('#' + this.id + 'Target').remove();
    } else {
        if(eventType === 'touchend') {
            // put back
            $(this).css({
              top: topStart,
              left: leftStart
            });
        } else {
            $(this).css({
              top: top + 'px',
              left: left + 'px'
            });
        }
    }

    if(!$("[topStop]").length) {
       cooking.step++;
       cooking.displayLevel();         
    }
};

cooking.displayLevel = function(){ 
    step = cooking.step;
    recipe = cooking.recipe;

    if(typeof recipe.steps[step] != 'object') {
        cooking.gameEnd();
        return;  
    }

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
        animation = recipe.steps[step].animation;
        cooking.displayAnimation(animation,0);
        return true;
    } 
    cooking.displayLevelContinue();
}

cooking.displayLevel = function(){ 
    step = cooking.step;
    recipe = cooking.recipe;

    if(typeof recipe.steps[step] != 'object') {
        cooking.gameEnd();
        return;  
    }

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
    if(typeof tools == 'object') {
        for (var i=0, len=tools.length; i<len; ++i ){
            // tool
            toolEl = document.createElement('img');
            toolEl.setAttribute('src', 'tools/' + tools[i].image);
            toolEl.setAttribute('id',tools[i].id);
            toolEl.setAttribute('class', 'tool');
            toolEl.style.top = tools[i].start.y + '%';  
            toolEl.style.left = tools[i].start.x + '%';  
            toolEl.style.width = tools[i].size.x + "%" ;  
            if(typeof tools[i].zIndex != 'undefined') {
                toolEl.style.zIndex = tools[i].zIndex; 
            }
            toolEl.style.height = tools[i].size.y + '%';
            toolEl.setAttribute('topStart',tools[i].start.y + '%');  
            toolEl.setAttribute('leftStart',tools[i].start.x + '%');  
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
    }
        else {
           cooking.step++;
           cooking.displayLevel();         
    }

    $("[topStop]").bind("touchstart touchmove", cooking.toolMove);
    $("[topStop]").bind("touchend", cooking.toolMove);
}

cooking.gameStart = (function(){
    $("#kitchen, #table").show(); 
    
    cooking.dropMarginY = 0.03 * parseInt(window.innerHeight);
    cooking.dropMarginX = 0.03 * parseInt(window.innerWidth);
    cooking.dropMarginYTouchend = 3 * cooking.dropMarginY;
    cooking.dropMarginXTouchend = 3 * cooking.dropMarginX;

    cooking.recipe = cooking.recipe1;
    cooking.step = 0;
    cooking.displayLevel();
});
