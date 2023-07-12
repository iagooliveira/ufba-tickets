/* eslint-disable react/prop-types */
import React from 'react';
import { Async } from 'react-async';

import { isFunction } from 'lodash';

import { DefaultLoader } from './DefaultLoader';

export const AsyncLoad = ({ children, color, minHeight, ...promiseParams }) => (
  <Async {...promiseParams}>
    <Async.Pending>
      <DefaultLoader color={color} minHeight={minHeight} />
    </Async.Pending>
    <Async.Fulfilled>
      {response => (isFunction(children) ? children(response) : children)}
    </Async.Fulfilled>
    <Async.Rejected>
      {error => (isFunction(children) ? children(error) : children)}
    </Async.Rejected>
  </Async>
);
