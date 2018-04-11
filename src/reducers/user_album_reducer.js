import merge from 'lodash/merge';
import { ADD_ALBUM, REMOVE_ALBUM } from '../actions/actions';

let initialState = {
  userAlbumIds: [],
  albums: {}
};

const UserAlbumReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case ADD_ALBUM:
      newState.userAlbumIds.unshift(action.album.collectionId);
      newState.albums[action.album.collectionId] = action.album;
      return newState;
    case REMOVE_ALBUM:
      let index = newState.userAlbumIds.indexOf(action.id);
      newState.userAlbumIds.splice(index, 1);
      delete newState.albums[action.id];
      return newState;
    default:
      return state;
  }
};

export default UserAlbumReducer;
