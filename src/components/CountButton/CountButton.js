import React from 'react';

import classes from '../../App.css'

const countButton = (props) => (
  <div
    className={classes.Button}
    onClick={props.clicked}
    >{props.sumType}
  </div>
);

export default countButton;
