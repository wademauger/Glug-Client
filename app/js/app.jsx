import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'semantic-ui-css/semantic.min.css';
import style from 'scss/main.scss';
import Root from './';

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react'),
  );
};

window.onload = () => {
  render(Root);
};

if (module.hot) {
  module.hot.accept('./', () => { render(Root); });
}
