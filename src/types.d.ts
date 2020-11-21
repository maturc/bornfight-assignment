export type IArtist = {
  id: number;
  title: string;
}
export type IArtists = Array<IArtist>;

export type IAlbum = {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  releaseDate: string;
  artistId: number;
  favorite: boolean;
}

export type IAlbums = Array<IAlbum>;