import React from 'react';
import {Button} from '@mui/material';

const OutlinedButton = props => {

  return (
    <Button
    color={props.color}
    variant="outlined"
    onClick={props.function}
    >
      {props.innerText}
    </Button>
  );
};

export default OutlinedButton;
