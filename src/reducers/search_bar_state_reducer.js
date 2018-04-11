import { SHOW_ALBUM_SEARCH_BAR } from '../actions/actions';

//SearchBarState size can be 'none', 'searchbar-only', 'mini-searchbar-albums', 'searchbar-albums'
const SearchBarState = (state = { show: false, size: 'none' }, action) => {
  switch (action.type) {
    case SHOW_ALBUM_SEARCH_BAR:
      return { show: action.payload.show, size: action.payload.size };
    default:
      return state;
  }
};

export default SearchBarState;
