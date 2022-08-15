var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.getElementById("#watchBtn");
var doNotWatchBtn = document.getElementById("#dontWatchBtn");
var dropDownBtn = document.querySelector("#dropBtn");
var posterImgEl = document.getElementById("#posterImg");
var mIndex = 0
var startBtn = document.getElementById("#startBtn")
var url = 'http://www.omdbapi.com/?apikey=2ba6647b&'


let choice = class {
  constructor(posterImg, name, genre) {
    this.posterImg = posterImg;
    this.name = name;
    this.genre = genre;
  }
  getimg() {
    return this.posterimg;
  }
  getname() {
    return this.name;
  }
  getorigins() {
    return this.genre;
  }
};



function genre(event) {
  document.getElementById("myDropdown").classList.toggle("show");
  fetch(url)
  .then(function(respnse){
    return respnse.json()
  })
  if (!event.url.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


startBtn.addEventListener("click", timetovote);

function timetovote() {
  watchBtn.addEventListener("click", addwatch);
  doNotWatchBtn.addEventListener("click", adddoNotWatch);
  displayoption();
}
function addwatch() {
  watchVariable++;
  nextOption();
}
function adddoNotWatch() {
  doNotWatchVariable++;
  nextOption();
}

function displayoption() {
  // var movielist = movielist[mIndex]; 
  Img = posterImgEl;
  //   movieName = ;
  genre.textContent = currCharacter.origins;
  watchBtn.addEventListener("click", addwatch);
  doNotWatchBtn.addEventListener("click", adddoNotWatch);
};

// function nextQuestion() {
//   if(cIndex != characterList.length - 1) {
//       cIndex++;
//       displayQuestion();
//   } else {
//           endGame();
//   }
// }

// function endGame(){

// }

// if (fileInput.isDefaultNamespace.length === 1) {
    //  var newCharacter = Character(fileInput, nameinput, originsinput)
    //  characterList.push(newCharacter);
    // } else {
    //     alert('please select one image file for this to work')
    // }