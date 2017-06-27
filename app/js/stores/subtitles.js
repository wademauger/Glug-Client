import { observable } from 'mobx';

class subStore {

  @observable subtitles = [];

  addSubs = newSubs => this.subtitles.push(newSubs);

}

export default subStore;
