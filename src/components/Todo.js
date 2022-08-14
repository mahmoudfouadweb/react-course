import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteBtnHandler(e) {
    // e.currentTarget.remove();
    // setModalIsOpen(true);
    setModalIsOpen(true);
  }

  ///////////////////////////
  // function closeModal() {
  //   setModalIsOpen(false);
  // }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteBtnHandler}>
          {props.btn}
        </button>
      </div>
      {/* {modalIsOpen && <Modal onChange={closeModal} />}
      {modalIsOpen && <Backdrop onChange={closeModal} />} */}
      {<Modal />}
      {<Backdrop />}
    </div>
  );
}

export default Todo;
