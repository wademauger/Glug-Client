import React from 'react';
import Header from './header';
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
          title => <Title {...title} key={title.title} />
        )
      }
    </CSSTransitionGroup>
  </div>
)));

