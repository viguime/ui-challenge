import { PostsActionTypes } from 'state_management/actions/posts/actionTypes';
import PostsReducer, { initialState } from './posts.reducer';

import { closePostDialog } from 'state_management/actions/posts/posts.actions';

describe('Posts Reducer', () => {
  test('default', () => {
    expect(PostsReducer(initialState, {} as never)).toEqual(initialState);
  });

  test('missing state', () => {
    expect(PostsReducer(undefined, {} as never)).toEqual(initialState);
  });

  test(PostsActionTypes.CLOSE_POST_DIALOG, () => {
    const action = closePostDialog();

    expect(PostsReducer(initialState, action)).toEqual({
      ...initialState,
      selectedPost: null,
    });
  });
});
