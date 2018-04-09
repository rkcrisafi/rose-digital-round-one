import * as iTunesAPI from '../APIUtil';

export const FETCH_ALBUMS = 'FETCH_ALBUMS';

const receiveAlbums = (albums) => ({
  type: FETCH_ALBUMS,
  albums
});

export const fetchAlbums = (query) => dispatch => (
  iTunesAPI.fetchAlbums(query).then(albums => dispatch(receiveAlbums(albums)))
);
