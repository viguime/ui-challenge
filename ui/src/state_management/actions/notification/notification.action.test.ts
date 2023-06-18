import { hideErrorNotification} from "./notification.actions";
import {NotificationActionTypes} from "./actionTypes";

describe('Notification actions', () => {
    test('hideErrorNotification', () => {
        expect(hideErrorNotification()).toEqual({
            type: NotificationActionTypes.HIDE_ERROR_NOTIFICATION,
        });
    });
});
