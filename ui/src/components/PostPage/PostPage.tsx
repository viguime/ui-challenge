import { useSelector } from 'react-redux';
import { AppState } from 'state_management/store';
import { PostContainer, PostPageImageContainer, PostTitle, PostBody, PostDialogImage, FlexContainer, FlexContainerVertical } from './styles';
import { useParams } from 'react-router-dom';

const PostPage = (): JSX.Element | null => {
  const { postId } = useParams<{ postId: string }>();
  const { postsList } = useSelector((state: AppState) => state.posts);

  const selectedPost = postsList.find((post) => post.id === postId);

  if (!selectedPost) {
    return null;
  }

  const { title, body, image } = selectedPost;

  return (
    <>
      <PostContainer>
        <FlexContainer>
          <PostPageImageContainer>
            <PostDialogImage src={image} />
          </PostPageImageContainer>
          <FlexContainerVertical>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
          </FlexContainerVertical>
        </FlexContainer>
      </PostContainer>
    </>
  );
};

export default PostPage;
