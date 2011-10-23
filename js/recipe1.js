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
        "x" : "15",
        "y" : "5"
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
    id : 'apricot',
    size : {
        "x" : "6",
        "y" : "13"
    },
    start : {
        "x" : "40",
        "y" : "60"
    },
    stop : {
        "x" : "42",
        "y" : "82"
    },
    image: "apricot.png"
}

cooking.recipe1.steps[1].remove = ['knife'];

// STEP 2
cooking.recipe1.steps[2] = {};

cooking.recipe1.steps[2].instruction = "Chop DRIED APRICOT with the KNIFE";

cooking.recipe1.steps[2].tools = [];

cooking.recipe1.steps[2].tools[0] =  {
    id : "knfie",
    size : {
        "x" : "15",
        "y" : "5"
    },
    start : {
        "x" : "80",
        "y" : "80"
    },
    stop : {
        "x" : "42",
        "y" : "82"
    },
    image: "knife.png"
}

cooking.recipe1.steps[1].remove = ['knife','board','apricot'];

// STEP 3
cooking.recipe1.steps[3] = {};

cooking.recipe1.steps[3].instruction = "step 3";

cooking.recipe1.steps[3].animation = [];

cooking.recipe1.steps[3].animation[0] = {
    image: "cuttingapricot.png",
    size : {
        "x" : "16",
        "y" : "15"
    },
    start : {
        "x" : "40",
        "y" : "80"
    },
    time : 1000
};

cooking.recipe1.steps[3].animation[1] = {
    image: "cuttingapricotpart2.png",
    size : {
        "x" : "16",
        "y" : "15"
    },
    start : {
        "x" : "40",
        "y" : "80"
    },
    time : 1000
};

cooking.recipe1.steps[3].animation[2] = {
    image: "cuttingapricotpart3.png",
    size : {
        "x" : "16",
        "y" : "15"
    },
    start : {
        "x" : "40",
        "y" : "80"
    },
    time : 1000
};
