import React from 'react';
import { useController } from 'react-hook-form';

import { DateTimePicker } from '@mui/lab';

import { useLangContext } from 'Components/Globalization';

import TextField from '../TextField';

const DateTimeField = ({
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
    <DateTimePicker
      label={label}
      inputFormat="dd/MM/yyyy hh:mm a"
      value={value}
      onChange={handleChange}
      renderInput={props => <TextField {...props} {...errorProps} />}
    />
  );
};

export default DateTimeField;
