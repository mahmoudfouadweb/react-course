function Modal(props) {
  return (
    <div className="modal">
      <p>are you sure</p>
      <button className="btn btn--alt" onClick={props.onChange}>
        cancel
      </button>
      <button className="btn" onClick={props.onChange}>
        confirm
      </button>
    </div>
  );
}

export default Modal;
