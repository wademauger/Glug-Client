import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import { inject, observer } from 'mobx-react';
import { Card, Icon } from 'semantic-ui-react'

const title = ({ title, onClick, subs }) => (
	<Card
    header={title}
    meta={subs + ' subtitles were found'}
    onClick={onClick}
  />
);

export default inject('store')(observer(title))
