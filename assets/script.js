var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.getElementById("#watchBtn");
var doNotWatchBtn = document.getElementById("#dontWatchBtn");
var dropDownBtn = document.querySelector("#dropBtn");
var posterImgEl = document.getElementById("#posterImg");
var mIndex = 0
var startBtn = document.querySelector("#startBtn");
var url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US';
var APIKey = 'd4ee677d19edc2e96425eb11e4079011';
var hide = document.getElementById('#hide');
var posterURl = 'https://api.themoviedb.org/3/configuration?api_key=d4ee677d19edc2e96425eb11e4079011'


let choice = class {
  constructor( genre) {
    this.genre = genre;
  }
  getorigins() {
    return this.genre;
  }
};



function genre(event) {
  document.getElementById("myDropdown").classList.toggle("show");
  
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




startBtn.addEventListener("click", function(event){
  event.preventDefault();
  timetovote(); 
  console.log(startBtn)
});


// function showStuff(id, text, btn) {
//   document.getElementById(id).style.display = 'block';
//   // hide the lorem ipsum text
//   document.getElementById(text).style.display = 'none';
//   // hide the link
//   btn.style.display = 'none';
// }




function timetovote() {
  // document.getElementById(hide).style.visibility = "visible";
  displayoption();

  function addwatch() {
    watchVariable++;
    nextOption();
  };


  function adddoNotWatch() {
    doNotWatchVariable++;
    nextOption();
  };

  function adddoNotWatch() {
    doNotWatchVariable++;
    nextOption();
  };

  function displayoption() {
    // var movielist = movielist[mIndex]; 
    Img = posterImgEl;
    //   movieName = ;
    // genre.textContent = ;
    // watchBtn.addEventListener("click", addwatch);
    // doNotWatchBtn.addEventListener("click", adddoNotWatch);
  };
  



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
