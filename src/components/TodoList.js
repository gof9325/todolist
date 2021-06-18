import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return <TodoListBlock>
      <TodoItem text="다롱이바보" done={true} />
      <TodoItem text="막창먹기" done={true} />
      <TodoItem text="포항가기" done={false} />
      <TodoItem text="가리비삼합먹기" done={false} />
  </TodoListBlock>;
}

export default TodoList;