import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Header from 'components/Header/Header';
import Notification from 'components/Notification/Notification';
import { PostDialog } from 'components/PostDialog/PostDialog';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import { useSelector } from 'react-redux';
import PostPage from 'components/PostPage/PostPage';


const App = (): JSX.Element => {
  const { selectedPost, postsList } = useAppSelector((state: AppState) => state.posts);
  const { open, message } = useSelector((state: any) => {
    return state.notification;
  });

  return (
    <Router>
      <Header logo="/logo.png" />
      <Routes>
        <Route path="/" element={<Home postsList={postsList} />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
      <Notification open={open} message={message} />
      {selectedPost && <PostDialog open={!!selectedPost} selectedPost={selectedPost} />}
    </Router>
  );
};

export default App;
