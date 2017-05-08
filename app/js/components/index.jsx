import React from 'react';
import Header from './header';
import Overlay from './overlay';
import Spinner from './spinner';
import Title from './title';
import { inject, observer } from 'mobx-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default inject('store')(observer(({store}) => (
  <div>
    <Header />
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      {
        store.movieTitles.map(
          (title, index) => <Title 
                      title={title.title}
                      subs={title.subs}
                      key={parseInt(index)}
                      onClick={store.getInfo.bind(this, title.ref, title.title, title.subs)} />
        )
      }
    </CSSTransitionGroup>
    <Overlay />
    <Spinner />
  </div>
)));

