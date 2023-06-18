import { Dialog, IconButton } from '@mui/material';
import { IProps } from './IProps';
import { useAppDispatch } from 'state_management/hooks';
import { closePostDialog } from 'state_management/actions/posts/posts.actions';
import SouthIcon from '@mui/icons-material/South';
import CloseIcon from '@mui/icons-material/Close';
import {
  PostBody,
  PostDialogBodyContainer,
  PostDialogContainer,
  PostDialogContent,
  PostDialogHeader,
  PostDialogImage,
  PostDialogImageContainer,
  PostTitle,
  CommentsSection,
} from './styles';

export const PostDialog = ({ open, selectedPost }: IProps): JSX.Element => {
  const { title, body, image } = selectedPost;
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closePostDialog());
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
      <PostDialogContainer>
        <PostDialogHeader>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PostDialogHeader>
        <PostDialogContent>
          <PostDialogImageContainer>
            <PostDialogImage src={image} />
          </PostDialogImageContainer>
          <PostDialogBodyContainer>
            <PostTitle>{title}</PostTitle>
            <PostBody>{body}</PostBody>
          </PostDialogBodyContainer>
        </PostDialogContent>
        <CommentsSection>
          <h2>Comments section goes here </h2>
          <SouthIcon />
        </CommentsSection>
      </PostDialogContainer>
    </Dialog>
  );
};
