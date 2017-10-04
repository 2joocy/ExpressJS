var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];
  


function _getRandomJoke(){
    return Math.floor(Math.random() * (jokes.length - 0 + 1)) + 0;
}

function _addJoke(joke){
    jokes.push(joke);
}

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
}