import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="react" btn="delete" />
      <Todo text="css" btn="open" />
      <Todo text="html" btn="close" />
      <Todo text="css" btn="open" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
