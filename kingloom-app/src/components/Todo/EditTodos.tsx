import React, { useState } from 'react';

const EditTodos = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="edit-button">
        Edit
      </button>
      <dialog className="modal" open={showModal}>
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={() => setShowModal(false)} className="close-x">
              &times;
            </span>
            <h4>Edit Todo</h4>
          </div>
          <div className="modal-body">
            <input type="text" />
          </div>
          <div className="modal-footer">
            <button className="save-button">Save</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditTodos;
