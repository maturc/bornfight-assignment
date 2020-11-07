const albumList = document.querySelector(".albums");

const render = async () => {
  const [albums, artists] = await fetchAlbumAndArtistData();
  renderData(albums, artists);
}


window.addEventListener('DOMContentLoaded', () => render());