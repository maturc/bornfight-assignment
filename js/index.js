const albumList = document.querySelector(".albums");
let limit = new URLSearchParams(window.location.search).get('limit');
if(!limit)
  limit = 10;

const render = async () => {
  const [albums, artists] = await fetchAlbumAndArtistData("?_limit="+limit);
  renderAlbums(albums, artists);
}

window.addEventListener("DOMContentLoaded", () => render());