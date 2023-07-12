/* eslint-disable no-return-await */
// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react';

import { isArray } from 'lodash';

// import Button from '@material-ui/core/Button';

import {
  addNotification,
  closeNotification,
  removeNotification
} from '../../../../src/Stores/Redux/slices/notification.slice' //'Stores/Redux/slices/notification.slice';

import ErrorTranslation from  './../../../Managers/ErrorTranslation/index' //'Managers/ErrorTranslation';

export default class NotificationUseCases {
  /**
   * @param {object} props
   * @param {import('redux-starter-kit').Store} props.store
   */
  constructor({ store }) {
    this.store = store;
    this.errorTranslation = new ErrorTranslation();
  }

  /**
   * @param {string} error
   */
  async error(error, optionsProp = {}) {
    const { namespace, ...options } = optionsProp;

    const humanized = await this.errorTranslation.humanize(
      error?.response?.data || error,
      namespace
    );

    if (isArray(humanized)) {
      return await Promise.all(
        humanized.map(
          async message => await this.newNotification(message, 'error', options)
        )
      );
    }

    await this.newNotification(humanized, 'error', options);

    return humanized;
  }

  async success(message, options = {}) {
    await this.newNotification(message, 'success', options);
  }

  async newNotification(message, type, options = {}) {
    await this.store.dispatch(
      addNotification({
        message,
        options: {
          variant: type,
          ...options
          // action: key =>
          //   React.createElement(
          //     Button,
          //     {
          //       onClick: () => this.closeNotification(key)
          //     },
          //     ['dismiss me']
          //   )
        }
      })
    );
  }

  /**
   * @param {string} id
   */
  async closeNotification(key) {
    await this.store.dispatch(
      closeNotification({
        dismissAll: !key, // dismiss all if no key has been defined
        key
      })
    );
  }

  /**
   * @param {string} id
   */
  async removeNotification(id) {
    await this.store.dispatch(removeNotification(id));
  }
}
