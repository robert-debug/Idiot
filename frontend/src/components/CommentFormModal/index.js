import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';
import { useSelector } from "react-redux";

function CommentFormModal({ annotationId }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  if(sessionUser) {

    return(
        <>
            <button onClick={() => setShowModal(true)}>Comment</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CommentForm props={{annotationId, setShowModal}}  />
                    </Modal>
      )}
      </>)
    } else {
        return null;
    }
}

export default CommentFormModal;