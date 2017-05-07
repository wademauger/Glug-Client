import React, { Component } from 'react'
import { Icon, Input, Menu } from 'semantic-ui-react'
import logo from '../img/glug-text.png';

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable className='fixed secondary'>

        <Menu.Item>
          <img className='headerLogo' src={logo} />
        </Menu.Item>

        <Menu.Menu>
          <Menu.Item className="searchItem">
            <Input icon='search' placeholder='Search Movies...' />
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item>
            <a className='item' href='#'>
              Report a bug <Icon name='bug' />
            </a>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

