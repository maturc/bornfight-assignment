import { IAlbums, IArtists } from '../types';

interface IFetchAlbumAndArtistData {
  (query?: string): Promise<[IAlbums, IArtists]> | Promise<[null, null]>;
}

const fetchAlbumAndArtistData: IFetchAlbumAndArtistData = async (query = "") => {
  try {
    const uri = "http://localhost:3004/";
    const albumsRoute  = "albums";
    const artistsRoute = "artists";

    const albumsRes = await fetch(uri+albumsRoute+query);
    const albums: IAlbums = await albumsRes.json();

    const artistsRes = await fetch(uri+artistsRoute);
    const artists: IArtists = await artistsRes.json();

    return [albums, artists];
  } catch (error) {
    console.warn(error);
    return [null, null];
  }
}

export default fetchAlbumAndArtistData;