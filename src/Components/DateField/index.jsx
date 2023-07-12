import React from 'react';
import { useController } from 'react-hook-form';

import DatePicker from '@mui/lab/DatePicker';

import { useLangContext } from 'Components/Globalization';

import TextField from '../TextField';

const DateField = ({
  label,
  name,
  control,
  supressErrorText,
  defaultValue = null,
  ...rest
}) => {
  const { translate } = useLangContext();

  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue
  });

  let errorProps = {};
  if (error) {
    errorProps = {
      error: true,
      helperText:
        !supressErrorText &&
        (typeof error.message === 'string'
          ? translate(error.message)
          : translate(error.message.key, error.message.params))
    };
  }

  const handleChange = newValue => {
    onChange(newValue);
  };

  return (
    <DatePicker
      inputFormat="dd/MM/yyyy"
      label={label}
      value={value}
      onChange={handleChange}
      renderInput={props => <TextField {...props} {...errorProps} />}
      {...rest}
    />
  );
};

export default DateField;
