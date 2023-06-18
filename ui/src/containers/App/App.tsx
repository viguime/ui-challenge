import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Header from 'components/Header/Header';
import Notification from 'components/Notification/Notification';
import { PostDialog } from 'components/PostDialog/PostDialog';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import { useSelector } from 'react-redux';

const App = (): JSX.Element => {
  const { selectedPost, postsList } = useAppSelector((state: AppState) => state.posts);
  const { open, message } = useSelector((state: any) => {
    return state.notification;
  });

  return (
    <>
      <Header logo="/logo.png" />
      <Routes>
        <Route index element={<Home postsList={postsList} />} />
      </Routes>
      <Notification open={open} message={message} />
      {selectedPost && <PostDialog open={!!selectedPost} selectedPost={selectedPost} />}
    </>
  );
};

export default App;
