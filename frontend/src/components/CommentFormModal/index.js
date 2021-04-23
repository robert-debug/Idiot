import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';
import { useSelector } from "react-redux";

function CommentFormModal({ prop }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  if(sessionUser) {

    return(
        <>
            <button className= 'content-button' onClick={() => setShowModal(true)}>Comment</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CommentForm className='new-comment-form' props={{prop, setShowModal}}  />
                    </Modal>
      )}
      </>)
    } else {
        return null;
    }
}

export default CommentFormModal;