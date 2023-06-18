import styled from 'styled-components';
import { Container } from '@mui/material';

export const HomeContainer = styled(Container)`
  padding-top: 130px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  gap: 20px;
`;
export const NoPostsContainer = styled.div`
margin-top: 100px;
text-align: center;
  
`;
export const NoPostsText = styled.p`
    font-size: 20px;
`