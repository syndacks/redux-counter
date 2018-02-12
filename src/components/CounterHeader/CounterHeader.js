import React from 'react';

import classes from './CounterHeader.css';

const counterHeader = (props) => (
  <div className={classes.CounterHeader}>Counter Header: {props.count}</div>
);

export default counterHeader;
