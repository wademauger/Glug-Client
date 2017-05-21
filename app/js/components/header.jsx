import React from 'react';
import { Input, Menu, Loader } from 'semantic-ui-react';
import injectedObserver from '../util/injectedObserver';
import logo from '../../img/glug-text-small.gif';
import loadingLogo from '../../img/glug-text-animated.gif';

const staticLogo = (<img
  alt=""
  className="headerLogo"
  src={logo}
/>);

const spinningLogo = (<img
  alt=""
  className="headerLogo"
  src={loadingLogo}
/>);

const header = () => (
  <Menu stackable className="fixed secondary">
    <Menu.Item>
      { store.loadingTitles ? spinningLogo : staticLogo }
    </Menu.Item>
    <Menu.Menu>
      <Menu.Item className="searchItem">
        <Input
          action="Clear"
          placeholder="Search Movies..."
          onChange={store.requestTitles}
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default injectedObserver(header);
