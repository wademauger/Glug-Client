import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export default ({store}) => (
  <Dimmer active>
    <Loader size='massive'>Loading</Loader>
  </Dimmer>
);
