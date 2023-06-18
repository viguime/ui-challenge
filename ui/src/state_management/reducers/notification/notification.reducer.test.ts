import { NotificationActionTypes } from 'state_management/actions/notification/actionTypes';
import NotificationReducer, { initialState } from './notification.reducer';

import { hideErrorNotification } from 'state_management/actions/notification/notification.actions';

describe('Notification Reducer', () => {
  test('default', () => {
    expect(NotificationReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(NotificationReducer(undefined, {} as never)).toEqual(initialState);
  });

  test(NotificationActionTypes.HIDE_ERROR_NOTIFICATION, () => {
    const action = hideErrorNotification();

    expect(NotificationReducer(initialState, action)).toEqual({
      ...initialState,
      open: false,
      message: '',
    });
  });
});
