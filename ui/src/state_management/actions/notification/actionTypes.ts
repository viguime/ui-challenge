export enum NotificationActionTypes {
  HIDE_ERROR_NOTIFICATION = 'HIDE_ERROR_NOTIFICATION',
}

export interface HideErrorNotification {
  type: NotificationActionTypes.HIDE_ERROR_NOTIFICATION;
}

export type NotificationActions = HideErrorNotification;
