import React from 'react';
import {Button} from '@mui/material';

const SolidButton = props => {
  return (
    <Button
      fullWidth={props.fullWidth ? props.fullWidth :  false}
      color={props.color}
      variant="contained"
      onClick={props.function}
    >
      {props.innerText}
    </Button>
  );
};

export default SolidButton;
