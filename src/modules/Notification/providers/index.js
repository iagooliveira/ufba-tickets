import store from 'Stores/Redux';

import NotificationUseCases from './notification.useCases';

export const notificationUseCases = new NotificationUseCases({
  store
});
