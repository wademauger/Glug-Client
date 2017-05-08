import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

export default inject('store')(observer( ({store}) => (
  store.spinnerShown ? 
    <Dimmer active>
    <Loader size='massive'>Loading</Loader>
    </Dimmer> : null
)));
