import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="react" btn="delete" />
      <Todo text="css" btn="open" />
      <Todo text="html" btn="close" />
      <Todo text="css" btn="open" />
    </div>
  );
}

export default App;
