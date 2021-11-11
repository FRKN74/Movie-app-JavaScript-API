const icon = document.querySelector(".search-icon");
const inputSearch = document.getElementById("search");

icon.addEventListener("click",function () {

    inputSearch.focus();

});




// MOVIE API
const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

    // DOM ELEMENT
    const mainContainer = document.querySelector(".container");
    getMovies(API_URL);

    async function getMovies(url){
        const res = await fetch(url);
        const data = await res.json();
        showMovies(data.results);
        console.log(data.results);
        
    }

    function showMovies(movies){
        movies.forEach(movie => {
            
            let movieEl = document.createElement("div");
            movieEl.classList.add("content");
            movieEl.innerHTML = `
            <div class="card">
            <img src="${IMG_PATH + movie.poster_path}" alt="" srcset="" height="400" width="100%" class="conten-image" >
            
                <span class="img-text-left" style="float: left;">
                    <label class="title" id="title">
                    ${movie.title}
                    <small class="imbd float-right">imdb:${movie.vote_average}</small>
                    </label> 
                    
                </span>
            </div>
            <div  id="text">
                <p>
                    <label style="font-weight: bold;" >${movie.title}</label> <br>
                    ${movie.overview}
                </p>
            </div>
            `;
            mainContainer.appendChild(movieEl);
        });
    }

    // İNPUT SEARCH
    inputSearch.addEventListener("input",function(e){
        const searchValue = e.target.value;
        const movieTitle = document.querySelectorAll(".title");

        movieTitle.forEach((title) => {

            title.parentElement.parentElement.parentElement.style.display = "none";

            if( title.textContent.toLocaleLowerCase().includes(searchValue.toLowerCase())){
                
                title.parentElement.parentElement.parentElement.style.display = "inline-flex";
            }
        });


    });

