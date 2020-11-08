const albumList = document.querySelector(".albums");
//?limit=limitNum
let limit = new URLSearchParams(window.location.search).get('limit');
if(!limit)
  limit = 10;
//?q=searchKwd
const q = new URLSearchParams(window.location.search).get('q');
let query;
q ? query = "&q="+q : query ="";

const render = async () => {
  const [albums, artists] = await fetchAlbumAndArtistData("?_limit="+limit+query);
  renderAlbums(albums, artists);
  initializeSearchSuggestions(albums);
}

window.addEventListener("DOMContentLoaded", () => render());


//searh bar
const searchForm  = document.querySelector(".search");
const searchInput = document.querySelector(".search__input");

const handleSearchSubmit = (e) => {
  e.preventDefault();
  window.location = `/?q=${searchInput.value}`;
}
searchForm.addEventListener('submit', handleSearchSubmit);

//search bar suggestions
const initializeSearchSuggestions = (albums) => {
  const searchBar = document.querySelector(".search__input");
  searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredAlbums = albums.filter( album => {
      return album.title.toLowerCase().includes(searchString)
    });
    renderSuggestionDropdown(searchBar, filteredAlbums);
  });
}

const renderSuggestionDropdown = (searchBar, filteredAlbums) => {
  suggestionTemplate = filteredAlbums.map( album => {
    return `
      <button type="button" onclick="handleSuggestionClick('${album.title}')">
        ${album.title}
      </button>
    `;
  }).join("");

  const searchSuggestionDropdown = document.querySelector(".search__suggestions");
  searchSuggestionDropdown.style.width = searchBar.getBoundingClientRect().width+"px";

  if(searchBar.value) {
    searchSuggestionDropdown.innerHTML = suggestionTemplate;
    searchSuggestionDropdown.style.display = "flex";

    window.addEventListener('mouseup', (event) => {
      if (event.target != searchSuggestionDropdown && event.target.parentNode != searchSuggestionDropdown){
        searchSuggestionDropdown.style.display = 'none';
        }
    });
  }
  else
    searchSuggestionDropdown.style.display = "none";
}
const handleSuggestionClick = (title) => {
  window.location = `/?q=${title}`
}