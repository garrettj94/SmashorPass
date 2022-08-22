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
// var posterURl = 'https://api.themoviedb.org/3/discover/movie?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US&include_adult=false&include_video=false';
var drop = document.getElementById('myDropdown');
var dropbtn = document.querySelector('.dropbtn');
var selectedgenre = document.querySelector('#genre');
// var selectedposter = document.querySelector('#posterImg');
var selectedname = document.querySelector('#filmName');
var genrechoice = "";
var posterList = []
var movieName = []
var posterindex = 0;




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
          // linkEl.className = "genrelist-item"
          linkEl.addEventListener("click", function(event){
            event.preventDefault();
            genrechoice = event.target.textContent.toUpperCase();
            console.log(genrechoice)
            selectedgenre.append(" ");
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
  // var genrechoice = drop;
  var requestURL =`https://api.themoviedb.org/3/discover/movie?api_key=d4ee677d19edc2e96425eb11e4079011&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genrechoice}`
  console.log(requestURL)
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  // if(genre === genreOfChoice ){
  .then(function (data) {
    console.log(data);
    
    for (var i = 0; i < data.results.length; i++) {
        var poster = "https://www.themoviedb.org/t/p/w220_and_h330_face" + data.results[i].poster_path;
        console.log(poster)

        // posterImgEl.setAttribute("src", poster)
          
        posterList.push(poster)
        // console.log(posterList)
        // console.log(genrechoice)




        // if( poster === genrechoice){
        //   fetch(posterURl)
        //   .then(function (response) {
        //     return response.json();
        //   })
        //   .then(function (data){
        //     console
        //     for (var i = 0; i = data.results[i].posterpath; i++){
        //       var posterimage = data.results[i].posterpath;
        //       console.log(posterimage)
        //     }
            

        //   })


        
        // }    
    }
    nextOption()
  })

};

//the above is storing the poster urls into an array, You just need to create a way to iterate through the array results one at a time and add functionality to the watch/don't watch buttons-Brian

dropbtn.addEventListener("click", genre);

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(genrechoice)
  displayoption();
  document.getElementById("hide").style.display = "block";
  document.getElementById("infoBox").style.display = "none";
  // console.log("working")
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
    nextOption();
};


function adddoNotWatch() {
  doNotWatchVariable++;
  nextOption();
};


watchBtn.addEventListener("click", addwatch);
doNotWatchBtn.addEventListener("click", adddoNotWatch);


// function timetovote() {
 
//   displayoption();


// };
// timetovote()



// function nextption() {
//   if(watchBtn = "click") {
    
//       next();
//   } else {
//           endGame();
//   }
// }

// function endGame(){

// }
   

function nextOption() {
  if(posterindex > posterList.length - 1){
    window.alert("end of list")
  }else{ 
    posterImgEl.setAttribute("src", posterList[posterindex])
    posterindex++;
  }
  


}

function displayQuestion() {
  var currQuestion = questionList[qIndex]; 
questionEl.textContent = currQuestion.question; 
var possibleAnswers = currQuestion.possibleAns;
//answers to be looped through and displayed based on the current question
for (var i = 0; i < possibleAnswers.length; i++) {
    answerButtons.children[i].textContent = possibleAnswers[i];
}

}




