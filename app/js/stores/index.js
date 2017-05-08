import { observable } from 'mobx';
import { titles, title, words } from '../api';

class store {

  @observable currentQuery = '';
  @observable movieTitles = [];

  requestTitles = (event) => {
    this.currentQuery = event.target.value;
    titles(this.currentQuery)
      .then(results => results.json())
      .then(data => this.movieTitles.replace(data))
      .catch(err => {
        console.log(err);
      });
  }
}

export default store;
