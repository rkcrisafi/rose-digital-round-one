import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, addAlbum, changeAlbumSearchState } from '../actions/actions';
import AlbumItem from './album_item';

class SearchBar extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let query = this.input.value.split(' ').join('+');
    this.props.fetchAlbums(query);
    this.props.changeAlbumSearchState(this.props.albumSearchState.show, 'searchbar-albums');
  }

  handleClick(size) {
    const { changeAlbumSearchState, albumSearchState, albums } = this.props;
    if (albumSearchState.show) {
      changeAlbumSearchState(!albumSearchState.show, 'none');
    } else {
      let size = albums.length === 0 ? 'searchbar-only' : 'searchbar-albums';
      changeAlbumSearchState(!albumSearchState.show, size);
    }
  }

  handleDoneClick() {
    this.props.changeAlbumSearchState(!this.props.albumSearchState, 'none');
  }

  render() {
    const { albums, addAlbum, userAlbums, albumSearchState } = this.props;
    let buttonClass = albumSearchState.size === 'mini-searchbar-albums' && albums.length === 3 ? 'mini' : '';
    console.log(albumSearchState.size, albums.length);
    return (
      <div className={`search-albums ${buttonClass}`}>
        <div className="navbar-container">
          <div
            onClick={() => this.handleClick(albumSearchState.size)}
            className="show-search-albums-button">
            <i className="fas fa-plus-circle"></i>
          </div>
        </div>
        <div className={`search-bar-container ${!albumSearchState.show ? "hide-search-bar" : ""}`}>
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="search-bar-form">
            <input
              type="text"
              ref={input => this.input = input}
              placeholder="Search..."/>
          </form>

          <div className="searched-albums-container">
            { albums.map((album, idx) => {
              return <AlbumItem
                        key={idx}
                        album={album}
                        addAlbum={addAlbum}
                        userAlbums={userAlbums}
                        albumSearchState={albumSearchState}/>;
            })}
          </div>
          <div>
            <button
              className={`done-button ${buttonClass}`}
              onClick={() => this.handleDoneClick()}>
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let albums = !state.albums.results ? [] : Object.keys(state.albums.results).map(id => state.albums.results[id]);
  let userAlbums = state.userAlbums;
  let albumSearchState = state.albumSearchState;
  return ({
    albums,
    userAlbums,
    albumSearchState
  });
};



export default connect(
  mapStateToProps,
  { fetchAlbums, addAlbum, changeAlbumSearchState }
)(SearchBar);
