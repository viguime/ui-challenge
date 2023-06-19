import { useSelector } from 'react-redux';
import { AppState } from 'state_management/store';
import {
  PostContainer,
  PostPageImageContainer,
  PostTitle,
  PostBody,
  PostDialogImage,
  FlexContainer,
  FlexContainerVertical,
  CommentItem,
  CommentAuthor,
  CommentContainer,
  CommentList,
  CommentText,
  CommentTitle,
  CommentCounter, 
} from './styles';
import { useParams } from 'react-router-dom';

const PostPage = (): JSX.Element | null => {
  const { postId } = useParams<{ postId: string }>();
  const { postsList } = useSelector((state: AppState) => state.posts);

  const selectedPost = postsList.find((post) => post.id === postId);

  if (!selectedPost) {
    return null;
  }

  const { title, body, image } = selectedPost;

  const staticComments = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great post!',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'I enjoyed reading this.',
    },
    {
      id: 3,
      author: 'Michael Johnson',
      text: 'Very informative!',
    },
    {
      id: 4,
      author: 'Emily Davis',
      text: 'Thanks for sharing!',
    },
    
  ];

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
        <CommentCounter>{staticComments.length} Comments</CommentCounter> {/* Display the comment count */}
        <CommentContainer>
          <CommentTitle>Comments</CommentTitle>
          <CommentList>
            {staticComments.map((comment) => (
              <CommentItem key={comment.id}>
                <CommentAuthor>{comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </CommentItem>
            ))}
          </CommentList>
        </CommentContainer>
      </PostContainer>
    </>
  );
};

export default PostPage;
