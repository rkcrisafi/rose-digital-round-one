
export const fetchAlbums = (query) => (
  fetch(`https://itunes.apple.com/search?term=${query}&limit=3&entity=album`)
  .then(res => res.json())
);
