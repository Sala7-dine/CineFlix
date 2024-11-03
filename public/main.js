
var movies = document.getElementById("movies");
var card = movies.getElementsByClassName("movie-card");

const selectOption = document.getElementById("selectOption");
const selectOptionAnnee = document.getElementById("selectOptionAnnee");

var valueAnnee = "";
var currentValue = "";

let ListMovies = [
    {
        name: "Inception (2010)", 
        year: 2010, 
        path: "../images/mv1.jpg", 
        type: "sci-fi", 
        actor: "Leonardo DiCaprio"
    },
    {
        name: "The Dark Knight (2008)", 
        year: 2008, 
        path: "../images/mv2.jpg", 
        type: "action", 
        actor: "Christian Bale"
    },
    {
        name: "Interstellar (2014)", 
        year: 2014, 
        path: "../images/mv3.jpg", 
        type: "sci-fi", 
        actor: "Matthew McConaughey"
    },
    {
        name: "Parasite (2019)", 
        year: 2019, 
        path: "../images/mv4.jpg", 
        type: "thriller", 
        actor: "Song Kang-ho"
    },
    {
        name: "The Godfather (1972)", 
        year: 1972, 
        path: "../images/mv5.jpg", 
        type: "crime", 
        actor: "Marlon Brando"
    },
    {
        name: "Forrest Gump (1994)", 
        year: 1994, 
        path: "../images/mv6.jpg", 
        type: "drama", 
        actor: "Tom Hanks"
    },
    {
        name: "Pulp Fiction (1994)", 
        year: 1994, 
        path: "../images/mv7.jpg", 
        type: "crime", 
        actor: "John Travolta"
    },
    {
        name: "The Matrix (1999)", 
        year: 1999, 
        path: "../images/mv8.jpg", 
        type: "sci-fi", 
        actor: "Keanu Reeves"
    },
    {
        name: "The Shawshank Redemption (1994)", 
        year: 1994, 
        path: "../images/mv2.jpg", 
        type: "drama", 
        actor: "Tim Robbins"
    },
    {
        name: "Schindler's List (1993)", 
        year: 1993, 
        path: "../images/mv5.jpg", 
        type: "history", 
        actor: "Liam Neeson"
    }
];

// Movies -------------------------------

function getCards(path , title){

    return ` <div class="flex flex-col justify-start movie-card">
            <img src="${path}" class="w-72"/>
            <div class="py-2 w-72">
              <div class="flex items-center justify-between" >
                <a href='detailePage.html' class="text-lg text-gray-800 font-semibold underline hover:no-underline cursor-pointer dark:text-white">${title}</a>
                <div class="w-12 h-12 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="fill-pink-600" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
`
}


function displayMovies() {
    movies.innerHTML = "";
    ListMovies.forEach(movie => {
        if (
            (currentValue === "" || movie.type === currentValue) &&
            (valueAnnee === "" || movie.year == valueAnnee)
        ) {
            movies.innerHTML += getCards(movie.path, movie.name);
        }
    });

}


displayMovies();


selectOptionAnnee.addEventListener("change", (e) => {
    valueAnnee = e.target.value;
    displayMovies();
});

selectOption.addEventListener("change", (e) => {
    currentValue = e.target.value;
    displayMovies();
});



// dark mode ------------------------------
let mode = document.getElementById("mode");
let saveMode = localStorage.getItem("darkMode");

onload = () => {
    if(saveMode === "dark"){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
}

mode.addEventListener("click" , ()=>{
    saveMode = localStorage.getItem("darkMode");
    console.log(saveMode);
    if(saveMode === "dark"){
        document.documentElement.classList.remove('dark');
       localStorage.setItem("darkMode" , "light");
    }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem("darkMode" , "dark");
    }
})



// Navbar Toggle ---------------------------------

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
} else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// Carousel -------------------------------- 

const carousel = document.querySelector(".all-movies");
let scrollAmount = 0;

function startCarousel() {
  setInterval(() => {
    carousel.scrollBy({ left: 1});
    scrollAmount += 1;

    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      carousel.scrollTo({left: 0});
      scrollAmount = 0;
    }
  },20);
}
startCarousel();


// Search -----------------------------------------


function Search(){
    var input = document.getElementById("search-bar");
    var filter = input.value.toLowerCase();

    for (i = 0; i < card.length; i++) {
      var h = card[i].getElementsByTagName("h3")[0];
      var txtValue = h.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1){
          card[i].style.display = "";
      } else {a
          card[i].style.display = "none";
      }
    }        
  }


// Favorit cards -------------------------------------------------------


let card_movies = document.querySelectorAll(".movie-card");


let TableCards = [];


if(localStorage.getItem("cards") !== null){

    TableCards = JSON.parse(localStorage.getItem("cards"));
}

card_movies.forEach((card,index) => {
    let favorit = card.querySelector("svg");
    let path = card.querySelector("img").src;
    let title = card.querySelector("h3").textContent;
    favorit.addEventListener("click" , (e) => {
        let Tab = [];
        Tab.push(path);
        Tab.push(title);
        console.log(Tab);
        TableCards.push(Tab);
        console.log(TableCards);
        localStorage.setItem("cards" , JSON.stringify(TableCards));
        alert("Le film a ete suavgarder avec succes !")
    })
});
