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
    var movies = document.getElementById("movies");
    var card = movies.getElementsByClassName("movie-card");

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

        // let exist = favorit.parentElement.parentElement.parentElement.querySelector("h3").textContent;

        // for(let i = 0 ; i<TableCards.length ; i++){
        //     var index = TableCards[i][1].includes(title);
        //     console.log(index);
        //     if (!index){
        let Tab = [];
        Tab.push(path);
        Tab.push(title);
        console.log(Tab);
        TableCards.push(Tab);
        console.log(TableCards);
        localStorage.setItem("cards" , JSON.stringify(TableCards));
        //     }
        // }

      
        
        // var localstr = localStorage.getItem("cards");

    //   if(localstr !== null){
    //     localstr += TableCards;
    //     localStorage.setItem("cards" , localstr);
    //   }else{
    //     localStorage.setItem("cards" , TableCards);
    //   }
     
    })
});


// scroll ---------------------------------------------


let arrow = document.getElementById("arrow");

window.addEventListener("scroll" , () => {

    if(scrollY >= 800){
        arrow.style.display = "flex";
    }else{
        arrow.style.display = "none";
    }

})