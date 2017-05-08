import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import style from 'scss/main.scss';
import Root from './components';
import { Provider } from 'mobx-react';
import Store from './stores'

const render = (Component, Store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={Store}>
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
