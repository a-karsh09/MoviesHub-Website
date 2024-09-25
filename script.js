const API_KEY = "15c1b8b8";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Function to search for movies using the API
function searchMovies() {
    const searchBar = document.getElementById('search-bar').value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = ''; // Clear previous results

    fetch(`${BASE_URL}&s=${searchBar}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                data.Search.forEach(movie => {
                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = `
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                        <img src="${movie.Poster}" alt="${movie.Title} poster" width="150">
                    `;
                    searchResults.appendChild(resultDiv);
                });
            } else {
                searchResults.innerHTML = `<p>No movies found</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', searchMovies);
