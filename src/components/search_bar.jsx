import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../actions/actions';
import AlbumItem from './album_item';

class SearchBar extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    let query = this.input.value.split(' ').join('+');
    this.props.fetchAlbums(query);
  }

  render() {
    return (
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
          { this.props.albums.map((album, idx) => {
            return <AlbumItem key={idx} album={album}/>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let albums = !state.albums.results ? [] : Object.keys(state.albums.results).map(id => state.albums.results[id]);
  return ({
    albums,
  });
};



export default connect(
  mapStateToProps,
  { fetchAlbums }
)(SearchBar);
