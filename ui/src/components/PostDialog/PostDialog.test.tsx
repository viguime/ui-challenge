import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import { selectedPost } from 'mocks/posts.mock';
import { PostDialog } from './PostDialog';
describe('Post Dialog', () => {
  test('renders Post Dialog when open is true', () => {
    render(
      <Provider store={store}>
        <PostDialog open selectedPost={selectedPost} />
      </Provider>,
    );
    expect(screen.getByText(`${selectedPost.title}`)).toBeInTheDocument();
  });

  test('doesnt renders Post Dialog when open is false', () => {
    render(
      <Provider store={store}>
        <PostDialog open={false} selectedPost={selectedPost} />
      </Provider>,
    );
    expect(screen.queryByText(`${selectedPost.title}`)).toBeNull();
  });

  test('render title and description', () => {
    render(
      <Provider store={store}>
        <PostDialog open selectedPost={selectedPost} />
      </Provider>,
    );
    expect(screen.getByText(selectedPost.title)).toBeInTheDocument();
    expect(screen.getByText(selectedPost.body)).toBeInTheDocument();
  });
});
