import fetchAlbumAndArtistData from "./utils/fetchData";
import renderAlbums from "./utils/renderAlbums";

//artist/:id
const id: number = Number(window.location.href.match('[^artist/]*$')[0]);

const render = async () => {
  const albumList = document.querySelector(".albums");
  const [albums, artists] = await fetchAlbumAndArtistData();
  const filteredAlbums = albums.filter( album => album.artistId === id);
  renderAlbums(filteredAlbums, artists, albumList);

  //change header text to artist name
  const artistNameH1 = document.querySelector("#artist-name");
  const currentArtist = artists.filter( artist => artist.id === id);
  artistNameH1.innerHTML = currentArtist[0].title;
}

window.addEventListener("DOMContentLoaded", () => render());