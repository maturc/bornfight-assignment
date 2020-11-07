const albumList = document.querySelector(".albums");

const renderTemplate = async () => {
  const albumsUri  = "albums";
  const artistsUri = "artists";
  let artists;
  let albums;
  await fetchData(artistsUri)
    .then( data => {
      artists = data;
    });
  await fetchData(albumsUri)
    .then( data => {
      albums = data;
    });

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


// const fetchData = async (query) => {
//   try {
//     const uri = "http://localhost:3004/";
//     const response = await fetch(uri+query);
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

window.addEventListener('DOMContentLoaded', () => renderTemplate());