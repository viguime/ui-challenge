import { useEffect } from 'react';
import { HomeContainer, GridContainer, NoPostsContainer, NoPostsText } from './styles';
import Post from 'components/Post';
import { getAllPosts } from 'state_management/actions/posts/posts.actions';
import { useAppDispatch } from 'state_management/hooks';
import { IProps } from './IProps';

const Home = ({ postsList }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  if (!postsList || postsList?.length === 0) {
    return (
      <NoPostsContainer>
        <NoPostsText>No Posts were found</NoPostsText>
      </NoPostsContainer>
    );
  }

  return (
    <HomeContainer maxWidth={'xl'}>
      <GridContainer>
        {postsList.map((item: any) => (
          <Post key={item.id} item={item} />
        ))}
      </GridContainer>
    </HomeContainer>
  );
};

export default Home;
