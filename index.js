// code your solution here
function saturdayFun(hobby = "roller-skate"){
    return `This Saturday, I want to ${hobby}!`;
}
    let mondayWork = function (task = 'go to the office'){
    return `This Monday, I will ${task}.`;
};

const wrapAdjective = function(all = "*"){
    return function inner (say = "good"){
    return `You are ${all}${say}${all}!`
 }
}

