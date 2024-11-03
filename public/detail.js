var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

var btn_like = document.getElementById("like-btn");
var counter = document.getElementById("counter");
var textComment = document.getElementById("textComment");
var commentBtn = document.getElementById("commentBtn");
var commentDiv = document.getElementById("commentDiv"); 

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var movies = document.querySelector(".all-movies");

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


// Navbar toggle ---------------------------------

function handleClick() {
if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
} else {
    collapseMenu.style.display = 'block';
}
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// Comments -----------------------------------------

var arrayComments = [];

function AddComments(value){
    var commentValue = document.createElement("div");

    commentValue.className = "w-4/5 border-2 border-gray-100 p-6 text-[#333] dark:text-white font-[sans-serif] rounded-md my-2";

    commentValue.innerHTML =  `   <div class="mt-6 space-y-10">
              <div class="flex items-start">
                <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                <div class="ml-3">
                  <h4 class="text-sm font-bold">vous</h4>
                  <div class="flex space-x-1 mt-1">
                    <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <p class="text-xs !ml-2 font-semibold">2 mins ago</p>
                  </div>
                  <p class="text-base mt-3">${value}</p>
                </div>
              </div>
            </div>` 

    return commentValue;
}


window.addEventListener("load" , ()=>{
    arrayComments = JSON.parse(localStorage.getItem("comments"));
    if(arrayComments !== null){
        arrayComments.forEach(comment => {
            commentDiv.appendChild(AddComments(comment))
        });
    }else{
        arrayComments = [];
    }
    
});

commentBtn.addEventListener('click' , function(){
    
  
    arrayComments.push(textComment.value);
    
    commentDiv.appendChild(AddComments(textComment.value));
    textComment.value = "";
   
  
    localStorage.setItem("comments" , JSON.stringify(arrayComments));
    
});


// Likes ----------------------------------------

btn_like.addEventListener("click" , function(){
    var content = counter.textContent;
    var i = 1;
    counter.innerHTML = Number(content) + i;
})

// Carousel -----------------------------------

next.addEventListener("click" , () => {
      movies.scrollBy({ left: 200 , behavior : "smooth"});
})

prev.addEventListener("click" , () => {
      movies.scrollBy({ left: -200 , behavior : "smooth"});
})


