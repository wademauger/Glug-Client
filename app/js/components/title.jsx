import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import { Card, Icon } from 'semantic-ui-react'

const title = ({ title, onClick, subs }) => (
	<Card
    header={title}
    meta={subs + ' subtitles were found'}
    onClick={onClick}
  />
);

export default title;
