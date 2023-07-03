//States

let currentPage = 1;
let lastPage = 100;

//Selectors
const movieCardContainer = document.getElementById("movies-card-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const pageNumberButton = document.getElementById("current-page-button");

// ---- Search Selector
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const sortByDateButton = document.getElementById("sort-by-date");
const sortByRatingButton = document.getElementById("sort-by-rating");

const favoritesButton = document.querySelector(".favorites-tab");
// const moviesCardContainer = document.getElementById('movies-card-container');
// const sortByDateButton = document.getElementById('sort-by-date');
// const sortByRatingButton = document.getElementById('sort-by-rating');
const likeButtons = document.getElementsByClassName("like-button");
//----  Fetch the movies from certain page..

async function fetchMovie(pageNumber) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTMxNDVhOTBkMmQxNzQ4YjhlOWVjMDFlODk1MTA2ZSIsInN1YiI6IjY0OTFkNmJhYzNjODkxMDBhZTUyYjMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpP1DZY3CSd2CRNgf9CSBWOxcaaXupzPo9Wd2r-_G_A",
      },
    };

    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`;
    const response = await fetch(url, options);
    let data = await response.json();

    //Lets set the last page value
    const { total_pages } = data;
    lastPage = total_pages;

    const changedData = remapData(data);

    renderMovies(changedData);

    return changedData;
  } catch (error) {
    console.log("error iss here");
  }
}

function remapData(data) {
  const moviesList = data.results;

  const modifiedMovieList = moviesList.map((movie) => {
    return {
      title: movie.title,
      voteAverage: movie.vote_average,
      posterPath: movie.poster_path,
      popularity: movie.popularity,
    };
  });
  return modifiedMovieList;
}

fetchMovie(currentPage);

// ----- rendering the movies -----------

function renderMovies(moviesList) {
  //Clearing the older movies in the grid layout
  movieCardContainer.innerHTML = "";
  moviesList.forEach((movie) => {
    const { popularity, posterPath, title, voteAverage } = movie;

    //  i want to crate a ui of Card \
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const posterUrl = "https://image.tmdb.org/t/p/original" + posterPath;

    // const posterUrl = 'https://image.tmdb.org/t/p/original' + posterPath

    // const sectionElement =  document.createElement("section")
    // const posterImageElement = document.createElement("img")
    // posterImageElement.src = posterUrl
    // posterImageElement.classList.add('poster')

    // sectionElement.appendChild(posterImageElement)
    // cardDiv.appendChild(sectionElement)

    cardDiv.innerHTML = `
          <section>
              <img class="poster" src=${posterUrl} alt="placeholder picture">
          </section>

          <p class="title">
              ${title}
          </p>

          <section class="votes-favorites">

                  <section class="votes">
                      <p class="vote-count">Votes: ${voteAverage}</p>
                      <p class="vote-rating">Rating: ${popularity}</p>
                  </section>

                  <section class="favorites">
                      <i class="fa-regular fa-heart"></i>
                  </section>

              </section>
      `;

    // I need to push that UI to the DOM to the Grid container

    const gridContainer = document.getElementById("movies-card-container");
    // console.dir(gridContainer);
    gridContainer.appendChild(cardDiv);

    // document.body.appendChild(cardDiv)
  });
}

//Listners

//as soon as we land on page previous button should be disable as we are on page no 1 by default
prevButton.disabled = true;

nextButton.addEventListener("click", () => {
  currentPage++;
  //Work 1 : call API for new Page
  fetchMovie(currentPage);

  //Work 2: update the page number in the HTML

  //Current Page: 1
  pageNumberButton.innerHTML = `Current Page: ${currentPage}`;
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else if (currentPage === 2) {
    prevButton.disabled = false;
  } else if (currentPage === lastPage) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener("click", () => {
  currentPage--;

  fetchMovie(currentPage);

  pageNumberButton.innerHTML = `Current Page: ${currentPage}`;
  if (currentPage === 1) {
    prevButton.disabled = true;
  } else if (currentPage === 2 && currentPage != lastPage - 1) {
    prevButton.disabled = false;
  } else if (currentPage === lastPage - 1) {
    nextButton.disabled = false;
  }
});

async function searchMovies(movieName) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=047110c3c93d16b2adb02c2c1dfe6d28`;

    const response = await fetch(url);
    const data = await response.json();

    const changedData = remapData(data);
    renderMovies(changedData);
  } catch (error) {
    console.log("error iss here");
  }
}

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  searchInput.value = "";
  searchMovies(query);
});

sortByRatingButton.addEventListener("click", async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTMxNDVhOTBkMmQxNzQ4YjhlOWVjMDFlODk1MTA2ZSIsInN1YiI6IjY0OTFkNmJhYzNjODkxMDBhZTUyYjMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QpP1DZY3CSd2CRNgf9CSBWOxcaaXupzPo9Wd2r-_G_A",
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  const data = await response.json();

  const changedData = remapData(data);
  renderMovies(changedData);
});

// Create an array to store the favorite movies
let favoritesList = [];

// Function to handle the like button click event
function handleLikeButtonClick(event) {
  const movieCard = event.target.closest(".movie-card");
  const movieId = movieCard.dataset.movieId;

  // Check if the movie is already in the favorites list
  const isFavorite = favoritesList.includes(movieId);

  if (isFavorite) {
    // Remove the movie from favorites
    favoritesList = favoritesList.filter((id) => id !== movieId);
    event.target.classList.remove("liked");
  } else {
    // Add the movie to favorites
    favoritesList.push(movieId);
    event.target.classList.add("liked");
  }
}

// Attach click event listeners to the like buttons
Array.from(likeButtons).forEach((button) => {
  button.addEventListener("click", handleLikeButtonClick);
});

// Function to filter movies based on the favorites list
function filterFavorites() {
  const allMovieCards = Array.from(movieCardContainer.children);

  // Hide all movie cards
  allMovieCards.forEach((card) => {
    card.style.display = "none";
  });

  // Show only the favorite movie cards
  favoritesList.forEach((movieId) => {
    const movieCard = movieCardContainer.querySelector(
      `.movie-card[data-movie-id="${movieId}"]`
    );
    if (movieCard) {
      movieCard.style.display = "block";
    }
  });
}

// Function to sort movies by date (oldest to latest)
function sortByDate() {
  const movieCards = Array.from(movieCardContainer.children);
  movieCards.sort((a, b) => {
    const dateA = new Date(a.dataset.releaseDate);
    const dateB = new Date(b.dataset.releaseDate);
    return dateA - dateB;
  });

  // Reorder the movie cards
  movieCards.forEach((card) => {
    movieCardContainer.appendChild(card);
  });
}

// Function to sort movies by rating (latest to good)
function sortByRating() {
  const movieCards = Array.from(movieCardContainer.children);
  movieCards.sort((a, b) => {
    const ratingA = parseFloat(a.dataset.rating);
    const ratingB = parseFloat(b.dataset.rating);
    return ratingB - ratingA;
  });

  // Reorder the movie cards
  movieCards.forEach((card) => {
    movieCardContainer.appendChild(card);
  });
}

// Attach click event listener to the favorites button
favoritesButton.addEventListener("click", filterFavorites);

// Attach click event listener to the sort by date button
sortByDateButton.addEventListener("click", sortByDate);

// Attach click event listener to the sort by rating button
sortByRatingButton.addEventListener("click", sortByRating);
