const albumList = document.querySelector(".albums");
let limit = new URLSearchParams(window.location.search).get('limit');
if(!limit)
  limit = 10;

const q = new URLSearchParams(window.location.search).get('q');
let query;
q ? query = "&q="+q : query ="";

const render = async () => {
  const [albums, artists] = await fetchAlbumAndArtistData("?_limit="+limit+query);
  renderAlbums(albums, artists);
}

window.addEventListener("DOMContentLoaded", () => render());