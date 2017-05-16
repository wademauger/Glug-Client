import { observable } from 'mobx';
import getTextFromHTMLString from '../util';
import moment from 'moment';

class subStore {

  @observable subtitles = [];

  addSubs = newSubs => this.subtitles.push(newSubs);
  
}

export default subStore;
