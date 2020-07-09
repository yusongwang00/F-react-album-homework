import React, { Component } from 'react';
import { fetchAlbums } from '../apiUtil';
import './Albums.scss';
import Photos from '../Photos/Photos';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      isAlbumsLoaded: false,
      error: null,
      shown: {},
    };
  }

  componentDidMount() {
    fetchAlbums().then(
      (result) => {
        this.setState({
          isAlbumsLoaded: true,
          albums: result,
        });
      },
      (error) => {
        this.setState({
          isAlbumsLoaded: true,
          error,
        });
      }
    );
  }

  toggle = (albumId) => {
    this.setState({
      shown: {
        ...this.state.shown,
        [albumId]: !this.state.shown[albumId],
      },
    });
  };

  render() {
    const { albums, isAlbumsLoaded, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isAlbumsLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" key={album.id} onClick={() => this.toggle(album.id)}>
            <p className="title">{album.title}.</p>
            {this.state.shown[album.id] ? <Photos albumId={album.id} /> : null}
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
