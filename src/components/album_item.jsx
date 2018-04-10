import React from 'react';

const AlbumItem = ({ album, addAlbum, userAlbums }) => {
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
  return (
    <div className="searched-album">
      <div className="searched-album-cover">
        <img src={covUrl}></img>
      </div>
      <div className="searched-album-info">
        <div className="album-info-line">
          Album:{'  '}<div className="album-info">{album.collectionName}</div>
        </div>
        <div className="album-info-line">Artist:{'  '}
          <div className="album-info">{album.artistName}</div>
        </div>
        <div className="album-info-line">
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
