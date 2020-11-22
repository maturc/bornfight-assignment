import { IAlbums } from "../types";

const initializeSearchBar = (albums: IAlbums) => {
  const searchForm  = document.querySelector(".search");
  const searchInput = document.querySelector(".search__input") as HTMLInputElement;

  searchForm.addEventListener('submit', (e) => handleSearchSubmit(e, searchInput));
  initializeSearchSuggestions(albums);
}

const handleSearchSubmit = (e: Event, searchInput: HTMLInputElement) => {
  e.preventDefault();
  window.location.href = `/?q=${searchInput.value}`;
}

//search bar suggestions
const initializeSearchSuggestions = (albums: IAlbums) => {
  const searchBar = document.querySelector(".search__input") as HTMLInputElement;
  searchBar.addEventListener('keyup', (e: any) => {
    const searchString = e.target.value.toLowerCase();
    const filteredAlbums = albums.filter( album => {
      return album.title.toLowerCase().includes(searchString)
    });
    renderSuggestionDropdown(searchBar, filteredAlbums);
  });
}
const renderSuggestionDropdown = (searchBar: HTMLInputElement, filteredAlbums: IAlbums) => {
  const suggestionTemplate = filteredAlbums.map( album => {
    return `
      <button type="button" onclick="window.location.href = '/?q=${album.title}';">
        ${album.title}
      </button>
    `;
  }).join("");

  const searchSuggestionDropdown = document.querySelector(".search__suggestions") as HTMLElement;
  searchSuggestionDropdown.style.width = searchBar.getBoundingClientRect().width+"px";

  if(searchBar.value) {
    searchSuggestionDropdown.innerHTML = suggestionTemplate;
    searchSuggestionDropdown.style.display = "flex";

    window.addEventListener('mouseup', (event) => {
      //@ts-ignore
      if (event.target != searchSuggestionDropdown && event.target.parentNode != searchSuggestionDropdown){
        searchSuggestionDropdown.style.display = 'none';
        }
    });
  }
  else
    searchSuggestionDropdown.style.display = "none";
}
//had to become inline
// const handleSuggestionClick = (title: string) => {
//   window.location.href = `/?q=${title}`;
// }

export default initializeSearchBar;