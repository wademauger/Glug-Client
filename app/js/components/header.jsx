import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import injectedObserver from '../util/injectedObserver';
import logo from '../../img/glug-text.png';

const header = () => (
  <Menu stackable className="fixed secondary">
    <Menu.Item>
      <img
        alt=""
        className="headerLogo"
        src={logo}
      />
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
