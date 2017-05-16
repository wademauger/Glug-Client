import React from 'react';
import { Button, Icon, Modal, Table } from 'semantic-ui-react';
import config from '../../../config';
import injectedObserver from '../util/injectedObserver';

const overlay = () => (
  <Modal
    open
    onClose={store.toggleOverlay}
    basic
    size="small"
  >
    <Modal.Content>
      <img
        alt=""
        className="coverImage"
        src={config.IMG_ROOT + store.coverImage}
      />
      <h1>{ store.title }</h1>
      { store.runtime } minutes
      <br />
      { store.numSubs } Subtitles found
      <br />
      <strong>Description: </strong>
      { store.description }
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
            store.drinkWords.map(
              (word, index) => <Table.Row key={parseInt(index, 10)}>
                <Table.Cell>
                  {word.word}
                </Table.Cell>
                <Table.Cell>
                  {word.occurrences.length}
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={store.toggleOverlay} inverted>
        <Icon name="trophy" /> Drink up
      </Button>
    </Modal.Actions>
  </Modal>
);

export default injectedObserver(overlay);
