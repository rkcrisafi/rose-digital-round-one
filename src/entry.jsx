import React from 'react';
import { render } from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

const App = () => {
  return (
    <div>
      hello
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
