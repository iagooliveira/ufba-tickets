import React from 'react';
import { useFormContext } from 'react-hook-form';

const HiddenInput = ({ name, ...props }) => {
  const { register } = useFormContext();

  return <input ref={register} type="hidden" name={name} {...props} />;
};

export default HiddenInput;
