function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(input='special') {
    return `You are ${flair}${input}${flair}!`;
  };
}

let Calculator = {function add(num1, num2) {
  return num1 + num2;
}};
