var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

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

mode.addEventListener("click" , ()=> {
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



// Navbar Toggle --------------------------- 

function handleClick() {
if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
} else {
    collapseMenu.style.display = 'block';
}
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

// Favorite Cards -----------------------------

function getCards(path , title){

    return `<div class="relative flex flex-col justify-start movie-card">
        <div id="close" class="flex justify-center items-center absolute right-[-10px] top-[-10px] rounded-full w-6 h-6 bg-orange-500 cursor-pointer hover:bg-red-600"><i class="fa fa-close" style="font-size:12px;color:white;"></i></div>
            <img src="${path}" class="w-72"/>
            <div class="py-2 w-72">
              <div class="flex items-center justify-between">
                
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
          </div>`
}

var movies = document.getElementById("movies");
var card_movies = document.getElementsByClassName("movie-card");

// var storedNames = localStorage.getItem("cards");
var storedNames = JSON.parse(localStorage.getItem("cards"));

storedNames.forEach(card=> {
    
    var div = getCards(card[0] ,card[1]);
    movies.innerHTML += div;
    
});

for(let i=0;i<card_movies.length;i++){
    let favorit = card_movies[i].querySelector('#close');
    
    favorit.addEventListener("click" , ()=>{
        let parent = favorit.parentElement.querySelector("a").textContent;
        favorit.parentElement.style.display = "none"

        console.log(storedNames);
        for(let i = 0 ; i<storedNames.length ; i++){

            var index = storedNames[i][1].includes(parent);
            console.log(index);
            if (index){
                storedNames.splice(i, 1); 
                localStorage.setItem("cards" , JSON.stringify(storedNames));
               
            }
        }


    });
}


