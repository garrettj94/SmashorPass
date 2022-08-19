var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.getElementById("watchBtn");
var doNotWatchBtn = document.getElementById("dontWatchBtn");
var dropDownBtn = document.querySelector("#dropBtn");
var posterImgEl = document.getElementById("posterImg");
var mIndex = 0
var startBtn = document.querySelector("#startBtn");
var genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US';
// var APIKey = 'd4ee677d19edc2e96425eb11e4079011';
// var hide = document.getElementById('#hide');
var posterURl = 'https://api.themoviedb.org/3/configuration?api_key=d4ee677d19edc2e96425eb11e4079011';
var drop = document.getElementById('myDropdown');
var dropbtn = document.querySelector('.dropbtn');
var genrechoice = "";




function genre (event) {
  event.preventDefault();
  fetch(genreUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.genres.length; i++) {
        var genre = data.genres[i].name;
        console.log(genre);


        var linkEl = document.createElement('a');
        
        if(drop.children.length < data.genres.length){
          linkEl.textContent = genre;
          linkEl.addEventListener("click", function(event){
            event.preventDefault();
            genrechoice = event.target.textContent;
          });
          drop.appendChild(linkEl);
        }
      }
    }) 

 drop.classList.toggle("show");
  window.onclick = function (event) {

    event.preventDefault();
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          // const list = document.getElementById("myDropdown");
          // list.removeChild(list.firstElementChild);
          
        }


      }
    }
  }
}



dropbtn.addEventListener("click", genre);
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  timetovote();
  document.getElementById("hide").style.display = "block";
  document.getElementById("infoBox").style.display = "none";
  console.log("working")
});


watchBtn.addEventListener("click", console.log("working"))

// function showStuff(id, text, btn) {
//   document.getElementById(id).style.display = 'block';
//   // hide the lorem ipsum text
//   document.getElementById(text).style.display = 'none';
//   // hide the link
//   btn.style.display = 'none';
// }




function timetovote() {
 
  displayoption();

  function addwatch() {
    
    watchVariable++;
    nextOption();
  };


  function addwatch() {
    doNotWatchVariable++;
    nextOption();
  };

  function adddoNotWatch() {
    doNotWatchVariable++;
    nextOption();
  };

  function displayoption() {
    fetch(posterURl)
    .then(function (response) {
      return response.json();
    })
    // if(genre === genreOfChoice ){
    .then(function (data) {
      for (var i = 0; i < data.images.length; i++) {
        console.log(data.images[i])

      }
    })
  

    

  };

  // watchBtn.addEventListener("click", addwatch);
  // doNotWatchBtn.addEventListener("click", adddoNotWatch);


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

