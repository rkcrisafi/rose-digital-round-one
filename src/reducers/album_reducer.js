import { FETCH_ALBUMS, SHOW_ALBUM_SEARCH_BAR } from '../actions/actions';


const AlbumReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.albums;
    case SHOW_ALBUM_SEARCH_BAR:
      if (action.payload.size === 'none') {
        return {};
      }
    default:
      return state;
  }
};

export default AlbumReducer;
