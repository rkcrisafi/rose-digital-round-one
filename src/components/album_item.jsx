import React from 'react';

const AlbumItem = ({ album, addAlbum, userAlbums, albumSearchState }) => {
  album, addAlbum, userAlbums;

  const handleClick = () => {
    addAlbum(album);
  };

  const checkLibrary = () => {
    if (userAlbums.albums[album.collectionId]) {
      return true;
    }
    return false;
  };

  let covUrl = album.artworkUrl100.split('100').join('300');
  let className = albumSearchState.size === 'mini-searchbar-albums' ? 'mini' : '';
  return (
    <div className={`searched-album ${className}`}>
      <div className={`searched-album-cover ${className}`}>
        <img src={covUrl}></img>
      </div>
      <div className={`searched-album-info ${className}`}>
        <div className={`album-info-line ${className}`}>
          Album:{'  '}<div className="album-info">{album.collectionName}</div>
        </div>
        <div className={`album-info-line ${className}`}>Artist:{'  '}
          <div className="album-info">{album.artistName}</div>
        </div>
        <div className={`album-info-line ${className}`}>
          Year: <div className="album-info">{album.releaseDate.slice(0,4)}</div>
        </div>
      </div>
      <div className="add-album-icon">
        <button
          onClick={() => handleClick()} disabled={checkLibrary()}
          className={`add-album-button ${ (checkLibrary()) ? "" : "red" }`}>
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default AlbumItem;
