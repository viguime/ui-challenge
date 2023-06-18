import styled from 'styled-components';

import { Paper } from '@mui/material';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
`;
export const PostContainer = styled(Paper)`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
export const BodyContainer = styled.div`
  padding: 20px 10px;
  position: relative;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  text-align: left;
  line-height: 1.2;
`;
export const Description = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 340px;
  white-space: nowrap;
`;
