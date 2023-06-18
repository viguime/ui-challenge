import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import Post from './Post';
import { selectedPost } from 'mocks/posts.mock';

describe('Post', () => {
  test('renders Post', () => {
    render(
      <Provider store={store}>
        <Post key={selectedPost.id} item={selectedPost} />
      </Provider>,
    );
    expect(screen.getByText(selectedPost.title)).toBeInTheDocument();
  });
});
