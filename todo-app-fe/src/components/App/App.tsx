import React from 'react';
import styled from 'styled-components';
import { TodoList } from '../TodoList/TodoList';

export const App: React.FC = () => {
  return (
    <StyledMainDiv>
      <TodoList />
    </StyledMainDiv>
  );
};

const StyledMainDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
