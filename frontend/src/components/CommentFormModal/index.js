import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';
import { useSelector } from "react-redux";

function CommentFormModal({ trackId }) {
    console.log(trackId)
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  if(sessionUser) {

    return(
        <>
            <button className= 'content-button' onClick={() => setShowModal(true)}>Comment</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CommentForm className='new-comment-form' props={{trackId, setShowModal}}  />
                    </Modal>
      )}
      </>)
    } else {
        return null;
    }
}

export default CommentFormModal;