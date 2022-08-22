var watchVariable = 0;
var doNotWatchVariable = 0;
var watchBtn = document.getElementById("watchBtn");
var doNotWatchBtn = document.getElementById("dontwatchBtn");
var dropDownBtn = document.querySelector("#dropBtn");
var posterImgEl = document.getElementById("posterImg");
var mIndex = 0
var startBtn = document.querySelector("#startBtn");
var genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US';
// var APIKey = 'd4ee677d19edc2e96425eb11e4079011';
// var hide = document.getElementById('#hide');
var posterURl = 'https://api.themoviedb.org/3/discover/movie?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US&include_adult=false&include_video=false';
var drop = document.getElementById('myDropdown');
var dropbtn = document.querySelector('.dropbtn');
var selectedgenre = document.querySelector('#genre');
// var selectedposter = document.querySelector('#posterImg');
var selectedname = document.querySelector('#filmName');
var genrechoice = "";
var posterList = []




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
            selectedgenre.append(": ");
            selectedgenre.append(genrechoice);
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
function displayoption() {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genrechoice}`)
  .then(function (response) {
    return response.json();
  })
  // if(genre === genreOfChoice ){
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.results.length; i++) {
        var poster = "https://www.themoviedb.org/t/p/w220_and_h330_face" + data.results[i].poster_path;
        console.log(poster)
      
        posterImgEl.setAttribute("src", poster)

        posterList.push(poster)
        console.log(posterList)

        if( poster === genrechoice){
          fetch(posterURl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data){
            console
            for (var i = 0; i = data.results[i].posterpath; i++){
              var posterimage = data.results[i].posterpath;
              console.log(posterimage)
            }
            

          })


        
        }    
    }
  })

};



dropbtn.addEventListener("click", genre);
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(genrechoice)
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



function addwatch() {
    watchVariable++;
    displayQuestion();
 
  nextOption();
};


function adddoNotWatch() {
  doNotWatchVariable++;
  nextOption();
};


watchBtn.addEventListener("click", addwatch);
doNotWatchBtn.addEventListener("click", adddoNotWatch);

function timetovote() {
 
  displayoption();


};
timetovote()



// function nextption() {
//   if(watchBtn = "click") {
    
//       displayQuestion();
//   } else {
//           endGame();
//   }
// }

function endGame(){

}
   

// function nextQuestion() {
//   // conditional to check if there are more questions
//   if(qIndex != questionList.length - 1) {
//       qIndex++;
//       displayQuestion();
//   } else {
//       setTimeout(function () {
//           endQuiz();
//       }, 500)

//   }
// }

// function displayQuestion() {
//   var currQuestion = questionList[qIndex]; 
// questionEl.textContent = currQuestion.question; 
// var possibleAnswers = currQuestion.possibleAns;
// //answers to be looped through and displayed based on the current question
// for (var i = 0; i < possibleAnswers.length; i++) {
//     answerButtons.children[i].textContent = possibleAnswers[i];
// }

// }




$('#hide').focus(function(){
  var full = $("#posterImg").has("img").length ? true : false;
  if(full == false){
    //  $('#poster').empty();
  }
  console.log(full)
});
var getPoster = function(){
    var film = $('#hide').val();
     if(film == ''){
        $('#posterImg').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');
     } else {
        $('#posterImg').html('<div class="alert"><strong>Loading...</strong></div>');
        $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=d4ee677d19edc2e96425eb11e4079011=" + film + "&callback=?", function(json) {
           if (json != "Nothing found."){
console.log(json);
                 $('#posterImg').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
              } else {
                 $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=d4ee677d19edc2e96425eb11e4079011=goonies&callback=?", function(json) {
                   console.log(json);
                    $('#posterImg').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                 });
              }
         });
      }
    return false;
}
$('#startBtn').click(getPoster);
// $('#term').keyup(function(event){
//    if(event.keyCode == 13){
//        getPoster();
//    }
// });