import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { isFunction } from 'lodash';

import { yupResolver } from '@hookform/resolvers/yup';

import FormLoader from './fragments/FormLoader';
import { CustomForm } from './style';

const Form = ({
  schema = {},
  onSubmit,
  style,
  maxWidth,
  children,
  formMethods: formMethodsProp,
  defaultValues = {}
}) => {
  const active = useRef(false);
  const formRef = useRef(null);
  const isSubmitLocked = useRef(false);
  const [isLoading, seIsLoading] = useState(false);

  useEffect(() => {
    active.current = true;

    return () => {
      active.current = false;
    };
  });

  const wrappedSchema = yupResolver(schema);
  const defaultFormMethods = useForm({
    defaultValues,
    resolver: wrappedSchema,
    validationContext: {
      abortEarly: false
    }
  });

  const formMethods = formMethodsProp || defaultFormMethods;
  const { handleSubmit, reset } = formMethods;

  const onSubmitHandler = useCallback(
    async data => {
      if (isSubmitLocked.current) return;
      seIsLoading(true);

      try {
        isSubmitLocked.current = true;
        await onSubmit(data, reset);
      } catch (error) {
        console.error(error);
      } finally {
        isSubmitLocked.current = false;
      }

      if (active?.current) seIsLoading(false);
    },
    [onSubmit, reset]
  );

  const submitForm = handleSubmit(onSubmitHandler);
  return (
    <>
      {isLoading ? <FormLoader /> : null}

      <FormProvider {...formMethods}>
        <CustomForm
          ref={formRef}
          style={style}
          onSubmit={submitForm}
          maxWidth={maxWidth}
          noValidate
          autoComplete="off"
        >
          {isFunction(children)
            ? children({ ...formMethods, submitForm })
            : children}
        </CustomForm>
      </FormProvider>
    </>
  );
};

export default Form;
