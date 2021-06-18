import logo from './logo.svg';
import './App.css';

import Reacte from 'react';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlovalStyle = createGlobalStyle`
  body {
    bacground: #e9ecef;
  }
`;

function App() {
  return (
  <div>
    <GlovalStyle/>
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  </div>
  );
}

export default App;
