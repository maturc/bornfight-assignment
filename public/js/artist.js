const albumList = document.querySelector(".albums");
//artist/:id
let id = window.location.href;
id = id.match('[^artist/]*$')[0];

const render = async () => {
  const [albums, artists] = await fetchAlbumAndArtistData();
  const filteredAlbums = albums.filter( album => album.artistId == id);
  renderAlbums(filteredAlbums, artists);

  //change header text to artist name
  const artistNameH1 = document.querySelector("#artist-name");
  const currentArtist = artists.filter( artist => artist.id == id);
  artistNameH1.innerHTML = currentArtist[0].title;
}

window.addEventListener("DOMContentLoaded", () => render());