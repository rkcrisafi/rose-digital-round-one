import { FETCH_ALBUMS, SHOW_ALBUM_SEARCH_BAR, CLEAR_SEARCHED_ALBUMS } from '../actions/actions';


const AlbumReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.albums;
    case CLEAR_SEARCHED_ALBUMS:
      return {};
    default:
      return state;
  }
};

export default AlbumReducer;
