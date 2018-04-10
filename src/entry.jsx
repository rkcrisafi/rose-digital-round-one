import React from 'react';
import { render } from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import SearchBar from './components/search_bar';
import UserAlbumList from './components/user_album_list';

const store = configureStore();

const App = () => {
  return (
    <div>
      <SearchBar />
      <UserAlbumList />
    </div>
  );
};

const Root = ({ store }) => (
  <div>
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </div>
);

render(<Root store={store}/>, document.querySelector('#root'));
