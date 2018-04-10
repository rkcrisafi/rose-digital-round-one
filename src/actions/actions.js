import * as iTunesAPI from '../APIUtil';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const ADD_ALBUM = 'ADD_ALBUM';
export const SHOW_ALBUM_SEARCH_BAR = 'SHOW_ALBUM_SEARCH_BAR';

const receiveAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  albums
});

export const addAlbum = (album) => ({
  type: ADD_ALBUM,
  album
});

export const changeAlbumSearchState = (value) => ({
  type: SHOW_ALBUM_SEARCH_BAR,
  value
});

export const fetchAlbums = (query) => dispatch => (
  iTunesAPI.fetchAlbums(query).then(albums => dispatch(receiveAlbums(albums)))
);
