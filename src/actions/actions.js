import * as iTunesAPI from '../APIUtil';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';
export const ADD_ALBUM = 'ADD_ALBUM';

const receiveAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  albums
});

export const addAlbum = (album) => ({
  type: ADD_ALBUM,
  album
});

export const fetchAlbums = (query) => dispatch => (
  iTunesAPI.fetchAlbums(query).then(albums => dispatch(receiveAlbums(albums)))
);
