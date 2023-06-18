import { HideErrorNotification, NotificationActionTypes } from './actionTypes';

export const hideErrorNotification = (): HideErrorNotification => {
  return {
    type: NotificationActionTypes.HIDE_ERROR_NOTIFICATION,
  };
};
