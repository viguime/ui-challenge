import { IProps } from './IProps';
import { ImageContainer, Image, PostContainer, Title, Description, BodyContainer } from './styles';
import { getPostById } from 'state_management/actions/posts/posts.actions';
import { useAppDispatch } from 'state_management/hooks';
const Post = ({ item }: IProps): JSX.Element => {
  const { title, body, image } = item;
  const dispatch = useAppDispatch();

  const handleClick = async (): Promise<void> => {
    dispatch(getPostById(item.id));
  };

  return (
    <PostContainer onClick={handleClick} data-testid="post-test-id">
      <ImageContainer>
        <Image src={image} alt="" />
      </ImageContainer>
      <BodyContainer>
        <Title>{title}</Title>
        <Description>{body}</Description>
      </BodyContainer>
    </PostContainer>
  );
};
export default Post;