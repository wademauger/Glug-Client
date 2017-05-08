import { observable } from 'mobx';
import { getTitles, getTitle, getWords, getCover } from '../api';
import coverImage from '../../img/cover-image.png';
import overlayState from './overlay';
import moment from 'moment';

class store {

  @observable currentQuery = '';
  @observable movieTitles = [];
  @observable overlayShown = false;
  @observable errorShown = false;
  @observable spinnerShown = false;

  /*information about the current movie*/
  @observable title = '';
  @observable runtime = '0';
  @observable numSubs = 0;
  @observable description = '';
  @observable coverImage = '';
  @observable drinkWords = [];
  @observable imdbid = '';
  @observable ref = '';

  mostRecent = Date.now();

  getInfo = (ref, title, numSubs) => {
    this.spinnerShown = true;
    this.ref = ref;
    this.title = title;
    this.numSubs = numSubs;

    getWords(ref)
      .then(results => {
        if (results.status != 200){
          this.clearOverlays();
          this.errorShown = true;
          throw "could not get words.";
        }
        return results.json();
      })
      .then(data => {
        this.imdbid = data.imdbid; 
        this.drinkWords.replace(data['ranked_words']);
        return getTitle(data.imdbid)
      })
      .then(results => results.json())
      .then(data => {
        this.runtime = moment.duration(data.runtime, 'seconds').asMinutes();
        this.description = data.overview;
        this.coverImage = data.poster;
        this.overlayShown = true;
        this.spinnerShown = false;
      })
      .catch(err => console.log(err));
  }

  requestTitles = (event) => {
    this.currentQuery = event.target.value;
    this.mostRecent = Date.now();
    const myTime = Date.now();
    getTitles(this.currentQuery)
      .then(results => {
        if (myTime > this.mostRecent){
          throw "not more recent titles request";
        }
        return results.json();
      })
      .then(data => this.movieTitles.replace(data))
      .catch(err => {
        console.log(err);
      });
  }

  toggleOverlay = () => {
    this.overlayShown = !this.overlayShown;
  }

  toggleError = () => {
    this.errorShown = !this.errorShown;
  }

  clearOverlays = () => {
    this.errorShown = false;
    this.spinnerShown = false;
    this.overlayShown = false;
  }
}

export default store;
