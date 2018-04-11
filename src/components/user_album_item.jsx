import React from 'react';

const UserAlbumItem = ({ album, removeAlbum }) => {
  album, removeAlbum;

  const handleClick = () => {
    removeAlbum(album.collectionId);
  }

  let covUrl = album.artworkUrl100.split('100').join('300');
  return (
    <div className="library-albums">
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
      <div>
        <div
          onClick={() => handleClick()}
          className="remove-album-button">
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default UserAlbumItem;
