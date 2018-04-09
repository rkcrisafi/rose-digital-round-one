import React from 'react';

const AlbumItem = ({ album }) => {
  let covUrl = album.artworkUrl100.split('100').join('300');
  return (
    <div className="search-album">
      <div className="search-album-cover">
        <img src={covUrl}></img>
      </div>
      <div className="search-album-info">
        <div className="album-info-line">Album:{' '}{album.collectionName}</div>
        <div className="album-info-line">Artist:{' '}{album.artistName}</div>
        <div className="album-info-line">Year:{' '}{album.releaseDate.slice(0,4)}</div>
      </div>
    </div>
  );
};

export default AlbumItem;
