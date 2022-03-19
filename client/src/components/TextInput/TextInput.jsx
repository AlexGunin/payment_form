import React from 'react';
import {useField, ErrorMessage} from 'formik';
import {TextField} from "@mui/material";

const TextInput = ({label, variant = "outlined", handleChange, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <TextField {...field} {...props} onKeyUp={handleChange}
               label={label} variant={variant}
               error={meta.touched && Boolean(meta.error)}
               helperText={<ErrorMessage name={props.name}
               />}
    />
  );
};
export default TextInput
