import React from 'react';
import { Card } from 'semantic-ui-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import injectedObserver from '../util/injectedObserver';
import Error from './error';
import Header from './header';
import Overlay from './overlay';
import Spinner from './spinner';

const index = () => (
  <div>
    <Header />
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {
        store.movieTitles.map(
          (title, i) => <Card
            header={title.title}
            meta={`${title.subs} subtitles were found`}
            key={parseInt(i, 10)}
            onClick={store.getInfo.bind(this, title.ref, title.title, title.subs)}
          />
        )
      }
    </CSSTransitionGroup>
    {store.errorShown ? <Error /> : null}
    {store.overlayShown ? <Overlay /> : null}
    {store.spinnerShown ? <Spinner /> : null}
  </div>
);

export default injectedObserver(index);
