import { combineReducers } from 'redux';
import AlbumReducer from './album_reducer';
import UserAlbumReducer from './user_album_reducer';

export default combineReducers({
  albums: AlbumReducer,
  userAlbums: UserAlbumReducer,
});
