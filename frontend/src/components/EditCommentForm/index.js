import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import EditCommentForm from './EditCommentForm'


function EditCommentFormModal({ commentId, body, userId }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const prop = {commentId, body}

    return(
        <>
            <button onClick={() => setShowModal(true)}>Edit Comment</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditCommentForm props={prop}  />
                    </Modal>
      )}
      </>)

}

export default EditCommentFormModal;