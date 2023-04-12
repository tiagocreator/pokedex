import React from 'react';
import { ProgressBarStyle, Progress } from '../styles/ProgressBarStyles';

const ProgressBar = (props) => {
  return (
    <ProgressBarStyle>
      <Progress item={props.item} />
    </ProgressBarStyle>
  );
};

export default ProgressBar;
