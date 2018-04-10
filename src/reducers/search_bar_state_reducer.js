import { SHOW_ALBUM_SEARCH_BAR } from '../actions/actions';

const SearchBarState = (state = false, action) => {
  switch (action.type) {
    case SHOW_ALBUM_SEARCH_BAR:
      return action.value;
    default:
      return state;
  }
};

export default SearchBarState;
