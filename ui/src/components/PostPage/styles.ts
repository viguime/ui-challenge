import styled from 'styled-components';

export const PostContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  padding: 90px;
  justify-content: top;
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const PostBody = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

export const PostPageImageContainer = styled.div`
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

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

export const FlexContainerVertical = styled.div`
  display: flex;
  width: 521px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
`;

export const CommentContainer = styled.div`
  margin-top: 20px;
  background-color: grey;
`;

export const CommentTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CommentList = styled.div`
  max-height: 200px;
  overflow-y: auto; 
`;
export const CommentItem = styled.li`
  margin-bottom: 10px;
`;

export const CommentAuthor = styled.span`
  font-weight: bold;
`;

export const CommentText = styled.p`
  margin-top: 5px;
`;
export const CommentCounter = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;
