import React from 'react';

import { useSnackbar } from 'notistack';

import { useLangContext } from 'Components/Globalization';
import wrapper from 'Components/Wrapper';

import { notificationUseCases } from 'Modules/Notification/providers';

let displayed = [];

const NotificationList = ({ notifications }) => {
  const { translate } = useLangContext();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = id => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = id => {
    displayed = [...displayed.filter(key => id !== key)];
  };

  React.useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          // dismiss snackbar using notistack
          closeSnackbar(key);
          return;
        }

        // do nothing if snackbar is already displayed
        if (displayed.includes(key)) return;

        // display snackbar using notistack
        enqueueSnackbar(translate(message), {
          key,
          ...options,
          onClick: () => {
            closeSnackbar(key);
          },
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            // remove this snackbar from redux store
            notificationUseCases.removeNotification(myKey);
            removeDisplayed(myKey);
          }
        });

        // keep track of snackbars that we've displayed
        storeDisplayed(key);
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, translate]);

  return null;
};

export default wrapper(NotificationList, {
  namespace: ['NOTIFICATIONS', ''],
  mapState: state => ({ notifications: state.notification.notifications })
});
