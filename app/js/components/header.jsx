import React, { Component } from 'react'
import { Icon, Input, Menu } from 'semantic-ui-react'
import logo from '../../img/glug-text.png';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Header extends Component {

  handleKeyPress = () => {
    console.log('key pressed');
  };

  render() {
    return (
      <Menu stackable className='fixed secondary'>
        <Menu.Item>
          <img className='headerLogo' src={logo} />
        </Menu.Item>
        <Menu.Menu>
          <Menu.Item className="searchItem">
            <Input
              action='Clear'
              placeholder='Search Movies...'
              onChange={this.props.store.requestTitles}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
};
