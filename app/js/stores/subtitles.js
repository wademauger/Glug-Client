import { observable } from 'mobx';
import getTextFromHTMLString from '../util';

class subStore {

  @observable subtitles = [];

  addSubs = newSubs => this.subtitles.push(newSubs);

  getText = getTextFromHTMLString;

}

export default subStore;
