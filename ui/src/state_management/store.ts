import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { rootReducer } from './reducers';
import { PostsState } from './reducers/posts/posts.reducer';

const apiHost = process.env.API_HOST || 'http://localhost:8080';

const client = axios.create({
  baseURL: apiHost,
  responseType: 'json',
});

export interface AppState {
  posts: PostsState;
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: [axiosMiddleware(client)],
});

export type AppDispatch = typeof store.dispatch;
