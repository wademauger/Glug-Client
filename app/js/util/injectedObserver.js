import { inject, observer } from 'mobx-react';

export default component => inject('store')(observer(component));
