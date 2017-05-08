import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import config from '../../../config'

@inject('store')
@observer
export default class Overlay extends Component {
  render() {
    return (
      <Modal
        open={this.props.store.overlayShown}
        onClose={this.props.store.toggleOverlay}
        basic
        size='small'
      >
        <Modal.Content>
          <img
            className='coverImage'
            src={ config.IMG_ROOT + this.props.store.coverImage }
          />
          <h1>{ this.props.store.title }</h1>
          { this.props.store.runtime } minutes
          <br />
          { this.props.store.numSubs } Subtitles found
          <br />
          <strong>Description: </strong>
          { this.props.store.description }
          <br />

          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Word</Table.HeaderCell>
                <Table.HeaderCell>Occurrences</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.props.store.drinkWords.map(
                  (word, index) => <Table.Row key={index}> 
                    <Table.Cell>
                      {word.word} 
                    </Table.Cell>
                    <Table.Cell>
                      {word.occurances}
                    </Table.Cell>
                  </Table.Row>
                )
              }
            </Table.Body>
          </Table>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.store.toggleOverlay} inverted>
            <Icon name='trophy' /> Drink up
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
