import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import style from 'scss/main.scss';
import Root from './components';
import Store from './stores';

const render = (Component, store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('react'),
  );
};

window.onload = () => {
  const store = new Store(); // Get rid of this shit
  window.store = store;
  render(Root, store);
};

if (module.hot) {
  module.hot.accept('./components', () => { render(Root); });
}
