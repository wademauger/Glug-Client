require('es6-promise').polyfill();
require('isomorphic-fetch');
import config from '../../config';

const getTitles = query => fetch(config.API_ROOT + '/titles/' + query);
const getWords = ref => fetch(config.API_ROOT + '/words/' + ref);
const getTitle = query => fetch(config.API_ROOT + '/title/' + query);
const getCover = uri => fetch(config.IMG_ROOT + uri)

export { getTitles, getTitle, getWords, getCover };
