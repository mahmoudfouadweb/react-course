function Todo(props) {
  function deleteHandler(e) {
    e.currentTarget.remove();
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {props.btn}
        </button>
      </div>
    </div>
  );
}

export default Todo;
