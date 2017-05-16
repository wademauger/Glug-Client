import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import injectedObserver from '../util/injectedObserver';

const error = () => (
  <Modal
    open
    onClose={store.toggleError}
    basic
    size="small"
  >
    <Modal.Content>
      <h1>Oops.</h1>
      <h3>{"Looks like we don't have anything about that movie."}
        <br />What are you gonna do?
      </h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={store.toggleError} inverted>
        <Icon name="meh" /> RIP
      </Button>
    </Modal.Actions>
  </Modal>
);

export default injectedObserver(error);
