import { observable } from 'mobx';
import { getTitles, getTitle, getWords, getCover } from '../api';
import coverImage from '../../img/cover-image.png';
import overlayState from './overlay';

class store {

  @observable currentQuery = '';
  @observable movieTitles = [];
  @observable overlayShown = false;
  @observable spinnerShown = false;

  /*information about the current movie*/
  @observable title = '';
  @observable runtime = 0;
  @observable numSubs = 0;
  @observable description = '';
  @observable coverImage = '';
  @observable drinkWords = [];
  @observable imdbid = '';
  @observable ref = '';

  getInfo = (ref, title, numSubs) => {
    this.spinnerShown = true;
    this.ref = ref;
    this.title = title;
    this.numSubs = numSubs;

    getWords(ref)
      .then(results => results.json())
      .then(data => {
        this.runtime = data.runtime;
        this.imdbid = data.imdbid; 
        this.drinkWords.replace(data['ranked_words']);
        return getTitle(data.imdbid)
      })
      .then(results => results.json())
      .then(data => {
        this.description = data.overview;
        this.coverImage = data.poster;
        this.overlayShown = true;
        this.spinnerShown = false;
      })
      .catch(err => console.log(err));
  }

  requestTitles = (event) => {
    this.currentQuery = event.target.value;
    getTitles(this.currentQuery)
      .then(results => results.json())
      .then(data => this.movieTitles.replace(data))
      .catch(err => {
        console.log(err);
      });
  }

  toggleOverlay = () => {
    this.overlayShown = !this.overlayShown;
  }
}

export default store;
