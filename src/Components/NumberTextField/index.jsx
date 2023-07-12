import React from "react";
import { useController } from "react-hook-form";
import NumberFormat from "react-number-format";

import { isFunction, merge } from "lodash";

import { TextField as MuiTextField } from "@mui/material";

const NumberFormatCustom = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange(values.value);
      }}
    />
  );
});

const NumberTextField = ({
  numberFormatProps: numberFormatPropsProp = {},
  name,
  control,
  defaultValue = "",
  children,
  currency = false,
  supressErrorText = false,
  ...rest
}) => {
  const {
    field: { ref, value, onChange, ...controlProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const numberFormatProps = merge(
    numberFormatPropsProp,
    currency
      ? {
          allowNegative: false,
          prefix: "R$ ",
          thousandsGroupStyle: "thousand",
          thousandSeparator: ".",
          decimalSeparator: ",",
          isNumericString: true,
          fixedDecimalScale: true,
          decimalScale: 2,
        }
      : {}
  );

  let errorProps = {};
  if (error) {
    errorProps = {
      error: true,
      helperText:
        !supressErrorText &&
        (typeof error.message === "string" ? "erro" : "erro"),
    };
  }

  return (
    <MuiTextField
      ref={ref}
      value={value}
      onChange={(e) => {
        onChange(e?.target?.value || e);
      }}
      InputProps={{
        inputComponent: NumberFormatCustom,
        inputProps: numberFormatProps,
      }}
      {...controlProps}
      {...rest}
      {...errorProps}
    >
      {isFunction(children) ? children(value) : children}
    </MuiTextField>
  );
};

export default NumberTextField;
