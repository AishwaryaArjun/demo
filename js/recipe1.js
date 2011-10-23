cooking = {};

cooking.recipe1 = {};

cooking.recipe1.title = "Juicy Fruitcake";

cooking.recipe1.steps = [];

// STEP 0
cooking.recipe1.steps[0] = {};

cooking.recipe1.steps[0].instruction = "Prepare tools";

cooking.recipe1.steps[0].tools = [];

cooking.recipe1.steps[0].tools[0] = {
    id : 'cuttingboard',
    size : {
        "x" : "16",
        "y" : "15"
    },
    start : {
        "x" : "50",
        "y" : "44"
    },
    stop : {
        "x" : "40",
        "y" : "80"
    },
    image: "deska.png"
}

cooking.recipe1.steps[0].tools[1] = {
    id: "apricot",
    size : {
        "x" : "6",
        "y" : "13"
    },
    start : {
        "x" : "2",
        "y" : "8"
    },
    stop : {
        "x" : "40",
        "y" : "60"
    },
    image: "apricot.png"
}

cooking.recipe1.steps[0].tools[2] = {
    id : "knife",
    size : {
        "x" : "5",
        "y" : "15"
    },
    start : {
        "x" : "80",
        "y" : "20"
    },
    stop : {
        "x" : "80",
        "y" : "80"
    },
    image: "knife.png"
}

cooking.recipe1.steps[0].remove = ['apricot'];

// STEP 1
cooking.recipe1.steps[1] = {};

cooking.recipe1.steps[1].instruction = "Put DRIED APRICOT on the CUTTING BOARD";

cooking.recipe1.steps[1].tools = [];

cooking.recipe1.steps[1].tools[0] =  {
    size : {
        "x" : "6",
        "y" : "13"
    },
    start : {
        "x" : "0",
        "y" : "0"
    },
    stop : {
        "x" : "42",
        "y" : "82"
    },
    image: "apricot.png"
}

cooking.recipe1.steps[1].animation = {};
