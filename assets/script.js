var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.getElementById("#watchBtn");
var doNotWatchBtn = document.getElementById("#dontWatchBtn");
var dropDownBtn = document.querySelector(".dropBtn");
var posterImgEl = document.getElementById("#posterImg");
var mIndex = 0
var startBtn = document.querySelector("#startBtn");
var genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US';
// var APIKey = 'd4ee677d19edc2e96425eb11e4079011';
// var hide = document.getElementById('#hide');
var posterURl = 'https://api.themoviedb.org/3/configuration?api_key=d4ee677d19edc2e96425eb11e4079011'

function poster() {
  fetch(posterURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    console.log(data.change_keys)
  })
}
poster();


function genre() {
  //look up how to undo an element = remove child 
  fetch(genreUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.genres)
      for (var i = 0; i < data.genres.length; i++) {
        console.log(data.genres[i])
       
        // "if drop.containt getellid my drop down .remove"

        var genre = data.genres[i].name;
        var hello = "hello world"
        var link = document.createElement('a');
        var drop = document.getElementById('myDropdown')
        // link.textContent = hello;
        
        // link.href = data.html_url;
        link.append(genre);
        drop.appendChild(link);
        



      }
    }) 

  document.getElementById("myDropdown").classList.toggle("show");
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


startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  timetovote();
  document.getElementById("hide").style.display = "block";
  console.log("working")
  document.getElementById("infoBox").style.display = "none";
});


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
