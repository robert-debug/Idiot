import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import EditCommentForm from './EditCommentForm'


function EditCommentFormModal(prop) {
  const [showModal, setShowModal] = useState(false);
  prop = { ...prop, setShowModal}
  const sessionUser = useSelector(state => state.session.user);

    return(
        <>
            <button className= 'content-button' onClick={() => setShowModal(true)}>Edit</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditCommentForm props={prop}  />
                    </Modal>
      )}
      </>)

}

export default EditCommentFormModal;