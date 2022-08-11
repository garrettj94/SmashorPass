var addCharacterBtn = document.querySelector("#generate");
var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.querySelector("smash");
var doNotWatchBtn = document.querySelector("pass");
var charEl = document.querySelector("#character");
var charImgEl = document.querySelector("#characterimg");
var charnameEl = document.querySelector("#charactername");
var charsourceEl = document.querySelector("#charactersrc");
var cIndex = 0 
let choice = class {
    constructor(img, name, origins){
        this.img = img;
        this.name = name;
        this.origins = origins;
    }
    getimg(){
        return this.img;
    }
    getname(){
        return this.name;
    }
    getorigins(){
        return this.origins;
    }
};

let characterList = [];

function addtoList() {
    var fileInput = document.getElementById('fileInput');
    var nameinput = document.getElementById('nameInput');
    var originsinput = document.getElementById('originsInput');
    if (fileInput.isDefaultNamespace.length === 1) {
     var newCharacter = Character(fileInput, nameinput, originsinput)
     characterList.push(newCharacter);   
    } else {
        alert('please select one image file for this to work')
    }
    var fileInput = null;
    var nameinput = null;
    var originsinput = null;
}

addGenreBtn.addEventListener("click",addtoList);

function startGame(){
    watchBtn.addEventListener("click", addwatch);
    doNotWatchBtn.addEventListener("click", adddoNotWatch);
    displayQuestion();
}
function addwatch(){
    watchVariable++;
    nextQuestion();
}
function adddoNotWatch(){
    doNotWatchVariable++;
    nextQuestion();
}

function displayQuestion() {
    var currCharacter = characterList[cIndex]; 
  charImgEl = currCharacter.img; 
  charnameEl.textContent = currCharacter.name;
  charsourceEl.textContent = currCharacter.origins;
  watchBtn.addEventListener("click", addwatch);
  doNotWatchBtn.addEventListener("click", adddoNotWatch);
}

function nextQuestion() {
  if(cIndex != characterList.length - 1) {
      cIndex++;
      displayQuestion();
  } else {
          endGame();
  }
}

function endGame(){

}

