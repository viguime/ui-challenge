import { IPost } from 'modals/posts/Modals';
import { PostsActions, PostsActionTypes } from 'state_management/actions/posts/actionTypes';

export interface PostsState {
  postsList: Array<IPost>;
  selectedPost: IPost | null;
}
export const initialState: PostsState = {
  postsList: [],
  selectedPost: null,
};

const PostReducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case PostsActionTypes.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        postsList: action.payload.data,
      };

    case PostsActionTypes.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        selectedPost: action.payload.data,
      };

    case PostsActionTypes.CLOSE_POST_DIALOG:
      return {
        ...state,
        selectedPost: null,
      };
    default:
      return state;
  }
};

export default PostReducer;
