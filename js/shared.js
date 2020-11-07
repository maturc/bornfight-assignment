const fetchAlbumAndArtistData = async (query="") => {
  try {
    const uri = "http://localhost:3004/";
    const albumsRoute  = "albums/";
    const artistsRoute = "artists/";

    const albumsRes = await fetch(uri+albumsRoute+query);
    const albums = await albumsRes.json();

    const artistsRes = await fetch(uri+artistsRoute);
    const artists = await artistsRes.json();

    return [albums, artists];
  } catch (error) {
    console.log(error);
  }
}

const renderData = (albums, artists) => {
  const template = albums.map( album => {
    const artistName = artists.filter( artist => artist.id === album.artistId)[0].title;
    const releaseDate = new Date(album.releaseDate).getFullYear();
    return `
      <div class="album">
        <div class="album__main">
          <div>
            <img src="${album.imageUrl}" alt="${album.title}" class="album__img"/>
            <img src="icons/favorite.svg" class="album__favorite-icon">
          </div>
          <div class="album__title">
            <h2>${album.title}</h2>
            <h3>${artistName}</h3>
          </div>
        </div>
        <div class="album__details">
          <div class="album__release-date">
            <span class="album__released">Relesed:</span>
            <p>${releaseDate}<p>
          </div>
          <span>${album.price}</span>
          <button class="album__button">
            Mark as favorite
          </button>
        </div>
      </div>
    `;
  }).join("");
  
  albumList.innerHTML = template;
}