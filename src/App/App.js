import React, { Component } from 'react';
import './App.scss';
import { fetchUser, fetchPhotos } from '../apiUtil';
import Header from '../Header/Header';
import Albums from '../Albums/Albums';
import UserInfo from '../UserInfo/UserInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isUserLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    fetchUser().then(
      (result) => {
        this.setState({
          isUserLoaded: true,
          user: result,
        });
      },
      (error) => {
        this.setState({
          isUserLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { isUserLoaded, user, error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isUserLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div data-testid="app" className="App">
        <Header user={user} />
        <main className="content">
          <Albums />
          <UserInfo user={user} />
        </main>
      </div>
    );
  }
}

export default App;
