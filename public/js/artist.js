const albumList = document.querySelector(".albums");
let id = window.location.href;
id = id.match('[^artist/]*$')[0];

const render = async () => {
  console.log("artist page");
  const [albums, artists] = await fetchAlbumAndArtistData();
  let filteredAlbums;
  filteredAlbums = albums.filter( album => album.artistId == id);
  renderAlbums(filteredAlbums, artists);
}

window.addEventListener("DOMContentLoaded", () => render());