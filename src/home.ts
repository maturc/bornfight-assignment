import fetchAlbumAndArtistData from "./utils/fetchData";
import renderAlbums from "./utils/renderAlbums";
import initializeSearchBar from "./utils/searchBar";

const init = async () => {
  const albumList = document.querySelector(".albums");

  const params: string = getSearchParams();
  const [albums, artists] = await fetchAlbumAndArtistData("?_limit="+params);
  renderAlbums(albums, artists, albumList);
  initializeSearchBar(albums);
}
window.addEventListener("DOMContentLoaded", () => init());

const getSearchParams = () => {
  //?limit=limitNum
  let limit = new URLSearchParams(window.location.search).get('limit');
  if(!limit)
    limit = "10";
  //?q=searchKwd
  const q = new URLSearchParams(window.location.search).get('q');
  let query = "";
  if(q)
    query = "&q="+q;

  return limit + query;
}