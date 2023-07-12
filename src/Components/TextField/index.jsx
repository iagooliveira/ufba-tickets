import React from "react";
import { useController } from "react-hook-form";

import { isFunction } from "lodash";

import { Close } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField as MuiTextField,
} from "@mui/material";

const TextField = ({
  name,
  control,
  defaultValue = "",
  children,
  onChange: onChangeProp = () => {},
  supressErrorText = false,
  allowClear,
  ...rest
}) => {
  const {
    field: { ref, value, onChange, ...inputProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  let errorProps = {};
  if (error) {
    errorProps = {
      error: true,
      helperText:
        !supressErrorText &&
        (typeof error.message === "string" ? "Erro" : "Erro"),
    };
  }

  const handleClear = () => {
    onChange(rest.multiple ? [] : "");
  };

  let adornment = null;
  if (allowClear) {
    adornment = (
      <InputAdornment position="end">
        <IconButton sx={{ marginRight: "20px" }} onClick={handleClear}>
          <Close />
        </IconButton>
      </InputAdornment>
    );
  }

  return (
    <MuiTextField
      ref={ref}
      value={value}
      autoComplete="on"
      onChange={(e) => {
        onChangeProp(e);
        onChange(e?.target?.value || e);
      }}
      InputProps={{ endAdornment: adornment }}
      {...inputProps}
      {...rest}
      {...errorProps}
    >
      {isFunction(children) ? children(value) : children}
    </MuiTextField>
  );
};

export default TextField;
