import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./style.css";

export default function InputWithIcon(props) {
  return (
    <>
      <FormControl variant="standard" color="secondary">
        <OutlinedInput
          value={props.value}
          className="input"
          placeholder={props.placeholderText}
          name={props.placeholderText}
          color={props.color}
          type={props.type ? props.type : 'text'}
          required={props.required}
          onChange={(e) => props.onChange(e)}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle color="primary"/>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}
