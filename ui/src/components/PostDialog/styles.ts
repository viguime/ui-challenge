import styled from 'styled-components';
import { DialogContent, DialogTitle, Paper } from '@mui/material';

export const PostDialogContainer = styled(Paper)`
  width: 100%;
  max-width: 1000px;
`;
export const PostDialogHeader = styled(DialogTitle)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const PostDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 50px;
`;

export const PostDialogImageContainer = styled.div`
  width: 50%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  overflow: hidden;
`;

export const PostDialogImage = styled.img`
  object-fit: cover;
  object-position: center;
`;
export const PostDialogBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  padding: 0 50px;
`;
export const PostBody = styled.p`
  font-size: 16px;
  margin-top: 0;
`;
export const PostTitle = styled.h1`
  font-size: 24px;
  margin-top: 0;
`;
export const CommentsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;
