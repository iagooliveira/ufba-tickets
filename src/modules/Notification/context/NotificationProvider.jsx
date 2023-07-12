/* eslint-disable react/prop-types */
import React from 'react';

import { SnackbarProvider } from 'notistack';

const NotificationProvider = ({ children }) => (
  <SnackbarProvider
    autoHideDuration={5000}
    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    // classes={{
    //   containerAnchorOriginTopRight:
    //     classes.containerAnchorOriginTopRight,
    //   variantSuccess: classes.success,
    //   variantError: classes.error,
    //   variantWarning: classes.warning,
    //   variantInfo: classes.info
    // }}
    // iconVariant={messageIcons}
  >
    {children}
  </SnackbarProvider>
);

export default NotificationProvider;
