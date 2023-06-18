import { screen, render } from '@testing-library/react';
import Notification from './Notification';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';

describe('Notification', () => {
  test('renders Notification when open is true', () => {
    render(
      <Provider store={store}>
        <Notification open={true} message={'error message'} />
      </Provider>,
    );
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  test('doesnt renders Notification when open is false', () => {
    render(
      <Provider store={store}>
        <Notification open={false} message={'error message'} />
      </Provider>,
    );
    expect(screen.queryByText(/error message/i)).toBeNull();
  });
});
