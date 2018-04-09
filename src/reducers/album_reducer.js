import { FETCH_ALBUMS } from '../actions/actions';


const AlbumReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default AlbumReducer;
