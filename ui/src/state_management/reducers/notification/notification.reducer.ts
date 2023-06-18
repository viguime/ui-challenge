import { PostsActions, PostsActionTypes } from 'state_management/actions/posts/actionTypes';
import { NotificationActions, NotificationActionTypes } from 'state_management/actions/notification/actionTypes';

export interface NotificationState {
  open: boolean;
}
export const initialState: NotificationState = {
  open: false,
};

const NotificationReducer = (state: NotificationState = initialState, action: PostsActions | NotificationActions) => {
  switch (action.type) {
    case PostsActionTypes.GET_ALL_POSTS_FAIL:
    case PostsActionTypes.GET_POST_BY_ID_FAIL:
      return {
        ...state,
        open: true,
        message: action.error.message,
      };
    case NotificationActionTypes.HIDE_ERROR_NOTIFICATION:
      return {
        ...state,
        open: false,
        message: '',
      };
    default:
      return state;
  }
};

export default NotificationReducer;
