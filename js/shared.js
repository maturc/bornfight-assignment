//function index
//..........................
//fetchAlbumAndArtistData
//handleFavoriteButton
//renderAlbums

const fetchAlbumAndArtistData = async (query="") => {
  try {
    const uri = "http://localhost:3004/";
    const albumsRoute  = "albums";
    const artistsRoute = "artists";

    const albumsRes = await fetch(uri+albumsRoute+query);
    const albums = await albumsRes.json();

    const artistsRes = await fetch(uri+artistsRoute);
    const artists = await artistsRes.json();

    return [albums, artists];
  } catch (error) {
    console.log(error);
    return [null, null];
  }
}

const handleFavoriteButton = async (id, isFavorite) => {
  try {
    await fetch("http://localhost:3004/albums/" + id, {
      method: "PATCH",
      body: JSON.stringify({"favorite": !isFavorite}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    render();
  }
  catch (error) {
    console.log(error);
    alert("Error: Couldn't connect to server!");
  }
}

const renderAlbums = (albums, artists) => {
  let template;
  //error check
  if(albums && artists)
    template = albums.map( album => {
      const artistName  = artists.filter( artist => artist.id === album.artistId)[0].title;
      const favorite    = album.favorite ? '<img src="icons/favorite.svg" class="album__favorite-icon">' : '';
      const releaseDate = new Date(album.releaseDate).getFullYear();
      return `
        <div class="album">
          <div class="album__main">
            <div>
              <img src="${album.imageUrl}" alt="${album.title}" class="album__img"/>
              ${favorite}
            </div>
            <div class="album__title">
              <h2>${album.title}</h2>
              <h3><a href="./artist.html?id=${album.artistId}">${artistName}</a></h3>
            </div>
          </div>
          <div class="album__details">
            <div class="album__release-date">
              <span class="album__released">Relesed:</span>
              <p>${releaseDate}<p>
            </div>
            <span>${album.price}</span>
            <button class="album__button" onclick="handleFavoriteButton(${album.id}, ${album.favorite})">
              Mark as favorite
            </button>
          </div>
        </div>
      `;
    }).join("");
  else
    template = `
      <div class="error">
        <h1>Error: Couldn't connect to server!</h1>
      </div>
    `;
  
  albumList.innerHTML = template;
}