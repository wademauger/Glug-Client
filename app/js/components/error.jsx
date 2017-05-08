import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import config from '../../../config'

@inject('store')
@observer
export default class Error extends Component {
  render() {
    return (
      <Modal
        open={true}
        onClose={this.props.store.toggleError}
        basic
        size='small'
      >
        <Modal.Content>
          <h1>Oops.</h1>
          <h3>
            Looks like we don't have anything about the movie.
            <br />
            What are you gonna do?
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.store.toggleError} inverted>
            <Icon name='meh' /> RIP
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
