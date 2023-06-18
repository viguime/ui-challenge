import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 20px;
`;
export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
