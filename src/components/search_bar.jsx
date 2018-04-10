import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums, addAlbum } from '../actions/actions';
import AlbumItem from './album_item';

class SearchBar extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let query = this.input.value.split(' ').join('+');
    this.props.fetchAlbums(query);
  }

  handleClick() {

  }

  handlePlusClick() {

  }

  render() {
    const { albums, addAlbum, userAlbums } = this.props;
    return (
      <div className="search-albums">
        <div className="navbar-container">
          <div
            onClick={() => this.handlePlusClick()}
            className="show-search-albums-button">
            <i className="fas fa-plus-circle"></i>
          </div>
        </div>
        <div className="search-bar-container">
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
              return <AlbumItem key={idx} album={album} addAlbum={addAlbum} userAlbums={userAlbums}/>;
            })}
          </div>
          <div>
            <button
              className="done-button"
              onClick={() => this.handleClick()}>
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
  return ({
    albums,
    userAlbums
  });
};



export default connect(
  mapStateToProps,
  { fetchAlbums, addAlbum }
)(SearchBar);
