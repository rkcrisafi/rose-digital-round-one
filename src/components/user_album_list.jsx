import React from 'react';
import { connect } from 'react-redux';
import UserAlbumItem from './user_album_item';

class UserAlbumList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loadCounter: 1 };
  }

  handleClick() {
    let loadCounter = this.state.loadCounter + 1;
    this.setState({ loadCounter });
  }

  render() {
    const { albums, userAlbumIds } = this.props;
    let albumIds = userAlbumIds.slice(0,this.state.loadCounter * 3);
    return (
      <div className="user-library">
        <div className="user-library-container">
          { userAlbumIds.length === 0 ? null :
            <div>
              <div className="library-title">Miles’s Melodious Music Miscellany</div>
              <div>
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
  return { albums, userAlbumIds };
};

export default connect(
  mapStateToProps
)(UserAlbumList);
