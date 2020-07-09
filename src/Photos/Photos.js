import React, { Component } from 'react';
import { fetchPhotos } from '../apiUtil';
import './Photos.scss';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    const { albumId } = this.props;
    fetchPhotos(albumId).then(
      (result) => {
        this.setState({
          isLoaded: true,
          photos: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { photos, isLoaded, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="Photos">
        {photos.slice(0, 3).map((photo) => (
          <div className="photo" id={photo.id}>
            <a href={photo.url}>
              <img src={photo.thumbnailUrl} />
            </a>
            <div className="title">{photo.title}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Photos;
