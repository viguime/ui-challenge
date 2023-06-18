import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'state_management/store';
import { PostDialog } from 'components/PostDialog/PostDialog';
import { PostContainer, PostTitle, PostBody } from './styles';

const PostPage = (): JSX.Element | null => {
  const { postId } = useParams<{ postId: string }>();
  const { selectedPost } = useSelector((state: AppState) => state.posts);

  if (!selectedPost) {
    return null;
  }

  const { title, body } = selectedPost;

  return (
    <>
      <PostContainer>
        <h1>Post ID: {postId}</h1>
        <PostTitle>{title}</PostTitle>
        <PostBody>{body}</PostBody>
      </PostContainer>
      <PostDialog open={true} selectedPost={selectedPost} />
    </>
  );
};

export default PostPage;
