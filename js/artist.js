const albumList = document.querySelector(".albums");
const id = new URLSearchParams(window.location.search)
console.log(id);
//.get('id');

const render = async () => {
  console.log("artist page");
  const [albums, artists] = await fetchAlbumAndArtistData();
  const filteredAlbums = albums.filter( album => album.artistId == id);
  renderAlbums(filteredAlbums, artists);
}

window.addEventListener("DOMContentLoaded", () => render());