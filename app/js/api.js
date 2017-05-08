require('es6-promise').polyfill();
require('isomorphic-fetch');
import config from '../../config';

const titles = query => fetch(config.API_ROOT + '/titles/' + query);
const words = ref => fetch(config.API_ROOT + '/words/' + ref);
const title = query => fetch(config.API_ROOT + '/title/' + query);

export { titles, title, words };
