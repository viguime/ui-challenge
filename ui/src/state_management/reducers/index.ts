import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/posts.reducer';
import notificationReducer from './notification/notification.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  notification: notificationReducer,
});
