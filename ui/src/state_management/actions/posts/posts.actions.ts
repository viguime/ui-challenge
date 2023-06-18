import { CloseDialogAction, GetAllPostsAction, GetPostByIdAction, PostsActionTypes } from './actionTypes';

export const getAllPosts = (): GetAllPostsAction => {
  return {
    type: PostsActionTypes.GET_ALL_POSTS,
    payload: {
      request: {
        method: 'get',
        url: '/posts',
      },
    },
  };
};

export const getPostById = (id: string): GetPostByIdAction => {
  return {
    type: PostsActionTypes.GET_POST_BY_ID,
    payload: {
      request: {
        method: 'get',
        url: `/posts/${id}`,
      },
    },
  };
};

export const closePostDialog = (): CloseDialogAction => {
  return {
    type: PostsActionTypes.CLOSE_POST_DIALOG,
  };
};
