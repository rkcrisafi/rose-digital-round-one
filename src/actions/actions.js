import * as iTunesAPI from '../APIUtil';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const ADD_ALBUM = 'ADD_ALBUM';
export const SHOW_ALBUM_SEARCH_BAR = 'SHOW_ALBUM_SEARCH_BAR';
export const CLEAR_SEARCHED_ALBUMS = 'CLEAR_SEARCHED_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

const receiveAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  albums
});

export const addAlbum = (album) => ({
  type: ADD_ALBUM,
  album
});

export const changeAlbumSearchState = (show, size) => ({
  type: SHOW_ALBUM_SEARCH_BAR,
  payload: { show, size }
});

export const clearSearchedAlbums = () => ({
  type: CLEAR_SEARCHED_ALBUMS,
});

export const removeAlbum = (id) => ({
  type: REMOVE_ALBUM,
  id,
});

export const fetchAlbums = (query) => dispatch => (
  iTunesAPI.fetchAlbums(query).then(albums => dispatch(receiveAlbums(albums)))
);
