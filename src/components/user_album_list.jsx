import React from 'react';
import { connect } from 'react-redux';
import { changeAlbumSearchState } from '../actions/actions';
import UserAlbumItem from './user_album_item';

class UserAlbumList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loadCounter: 1 };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      console.log(window.scrollY);
      
      const { changeAlbumSearchState, albumSearchState, numberFoundAlbums } = this.props;
      if (albumSearchState.show && numberFoundAlbums > 1) {
        let size = window.scrollY <= 20 ? 'searchbar-albums' : 'mini-searchbar-albums';
        changeAlbumSearchState(albumSearchState.show, size);
      }
    }


  handleClick() {
    let loadCounter = this.state.loadCounter + 1;
    this.setState({ loadCounter });
  }

  render() {
    const { albums, userAlbumIds, albumSearchState } = this.props;
    let albumIds = userAlbumIds.slice(0,this.state.loadCounter * 3);
    return (
      <div className="user-library">
        <div className={`${albumSearchState.size}`}></div>
        <div className="user-library-container">
          { userAlbumIds.length === 0 ? null :
            <div>
              <div className="library-title">Miles’s Melodious Music Miscellany</div>
              <div ref={ref => this.userLibrary = ref}>
                { albumIds.map((id, idx) => {
                  return <UserAlbumItem key={idx} album={albums[id]}/>;
                })}
              </div>
              { this.state.loadCounter * 3 >= userAlbumIds.length ? null :
                <div>
                  <button
                    className="load-more-button"
                    onClick={() => this.handleClick()}>
                    Load More
                  </button>
                </div>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { albums, userAlbumIds } = state.userAlbums;
  const numberFoundAlbums = state.albums.resultCount;
  let albumSearchState = state.albumSearchState;
  return { albums, userAlbumIds, albumSearchState, numberFoundAlbums };
};

export default connect(
  mapStateToProps,
  { changeAlbumSearchState }
)(UserAlbumList);
